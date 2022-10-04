import React from 'react';
import Carousel from 'components/carousel/carousel';
import DeliveryImg from 'assets/image/Toys.gif';
import OrderImg from 'assets/image/2.jpg';
import CouponImg from 'assets/image/3.jpg';
import FemaleCareImg from 'assets/image/4.jpg';

const data = [
  {
    id: 1,
    image: DeliveryImg,
    link: '#',
    title: 'Fast delivery',
  },
  {
    id: 2,
    image: CouponImg,
    link: '#',
    title: 'Coupon savings',
  },
  {
    id: 3,
    image: OrderImg,
    link: '#',
    title: 'Custom order',
  },
  {
    id: 4,
    image: FemaleCareImg,
    link: '#',
    title: 'Female care',
  },
];

export default function HeroBlock() {
  return (
    <div className="w-full relative my-35px">
      <Carousel data={data} itemClass="px-5px" />
    </div>
  );
}
