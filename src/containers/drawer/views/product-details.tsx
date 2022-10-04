import React, { useState, useContext } from "react";
import { Scrollbar } from "components/scrollbar";
import Button from "components/button";
import { CURRENCY } from "helpers/constants";
import { useCart } from "contexts/cart/cart.provider";
import { DrawerContext } from "contexts/drawer/drawer.provider";
import ArrowLeft from "assets/icons/arrow-left";
import Counter from "components/counter";
import {
  ItemCardInformation,
  ItemCardMoq,
  ItemCardName,
  ItemCardPrice,
} from "components/utils/theme";

export default function ProductDetails() {
  const [visibility, setVisibility] = useState(false);
  const { addItem, getItem, removeItem } = useCart();
  const { state, dispatch } = useContext(DrawerContext);

  const count = getItem(state.item.id)?.quantity;

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const hideDetails = () => {
    dispatch({
      type: "TOGGLE_PRODUCT_DETAIL",
      payload: {
        showDetails: false,
      },
    });

    dispatch({
      type: "SLIDE_CART",
      payload: {
        open: false,
      },
    });
  };

  const addToCart = () => {
    addItem(state.item);
    dispatch({
      type: "TOGGLE_CART_VIEW",
      payload: {
        showCart: true,
      },
    });
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full flex justify-center relative px-30px py-20px">
        <button
          className="w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900"
          onClick={hideDetails}
          aria-label="close"
        >
          <ArrowLeft />
        </button>

        <h2 className="font-bold text-24px m-0">Details</h2>
      </div>

      <Scrollbar className="details-scrollbar flex-grow">
        <div className="flex flex-col p-30px pt-0">
          <div className="flex items-center justify-center w-full h-360px overflow-hidden rounded mb-30px">
            <img src={state.item.image} alt={`${state.item.name}-img`} />
          </div>
          <div>
            <div>
              
           
            <span className={ItemCardPrice}>
              {CURRENCY}
              {state.item.price}
            </span> </div>
            <span className={ItemCardName}>{state.item.name}</span>

            <div className={ItemCardInformation}>{state.item.description}</div>
            <div className={ItemCardMoq}>MOQ : {state.item.moq}</div>
          </div>
        </div>
      </Scrollbar>

      <div className="flex flex-col p-30px">
        {count > 0 ? (
          <Counter
            value={count}
            className="ml-auto w-full big"
            size="big"
            onIncrement={() => {
              addItem(state.item);
            }}
            onDecrement={() => removeItem(state.item)}
          />
        ) : (
          <Button className="w-full big" onClick={addToCart}>
            Add To Cart
          </Button>
        )}
      </div>
    </div>
  );
}
