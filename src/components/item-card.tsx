import React from "react";
import { CURRENCY } from "../helpers/constants";
import CounterAlt from "components/animated-counter";

import {
  ItemCardBase,
  ItemCardBaseContent,
  ItemCardImage,
  ItemCardContent,
  ItemCardPrice,
  ItemCardName,
  ItemCardMoq,
  ItemCardCounterWrapper,
} from "./utils/theme";

interface ItemProps {
  image: string;
  name: string;
  price: number;
  category: string;
  description: string;
  moq: number;
}

interface ItemCardProps {
  item: ItemProps;
  value: number;
  onClick?: (e: any) => void;
  onDecrement?: (e: any) => void;
  onIncrement?: (e: any) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({
  item,
  onClick,
  onDecrement,
  onIncrement,
  value,
}) => {
  const baseClassName = ItemCardBase + " " + (value ? "shadow-cart" : "");
  return (
    <div className={baseClassName}>
      <div className={ItemCardBaseContent}>
        <div className={ItemCardImage} onClick={onClick}>
          <img
            className="object-cover"
            src={item.image}
            alt={" Alt " + item.name}
            style={{ height: "14rem" }}
          />
        </div>

        <div className={ItemCardContent}>
          <span className={ItemCardPrice}>
            {CURRENCY}
            {item.price}
          </span>
          <span className={ItemCardName}>{item.name}</span>
          <div className={ItemCardMoq}>MOQ : {item.moq}</div>
          <div className={ItemCardCounterWrapper}>
            <CounterAlt
              value={value}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
