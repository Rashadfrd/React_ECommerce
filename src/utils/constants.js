import React from "react";
import {AiOutlineShoppingCart, AiOutlineLock, AiOutlinePhone} from 'react-icons/ai'
import {CiMoneyBill} from 'react-icons/ci'

export const links = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "About",
    url: "/about",
  },
  {
    id: 3,
    text: "Products",
    url: "/products",
  },
];

export const homeInfos = [
  {
    id: 1,
    icon: <AiOutlineShoppingCart size={33} />,
    name: "Free Shipping",
    content: "Orders Above $200",
  },
  {
    id: 2,
    icon: <AiOutlinePhone size={38} />,
    name: "Money Back",
    content:
      "30 day guarantee",
  },
  {
    id: 3,
    icon: <CiMoneyBill size={38} />,
    name: "Premium Support",
    content:
      "Phone and email support",
  },
  {
    id: 4,
    icon: <AiOutlineLock size={35} />,
    name: "Secure Payments",
    content:
      "Secured by Stripe",
  },
];

export const partners = [
  {
    id: 1,
    src: "https://kontakt.az/wp-content/uploads/2020/03/Acer_png.webp",
  },
  {
    id: 2,
    src: "https://kontakt.az/wp-content/uploads/2020/03/Beurer_png.webp",
  },
  {
    id: 3,
    src: "https://kontakt.az/wp-content/uploads/2020/04/3_png.webp",
  },
  {
    id: 4,
    src: "https://kontakt.az/wp-content/uploads/2020/03/TOYOTA_png.webp",
  },
  {
    id: 5,
    src: "https://kontakt.az/wp-content/uploads/2020/03/Panasonic_png.webp",
  },
  {
    id: 6,
    src: "https://kontakt.az/wp-content/uploads/2020/03/Kenwood_png.webp",
  },
  {
    id: 7,
    src: "https://kontakt.az/wp-content/uploads/2020/04/4_png.webp",
  },
  {
    id: 8,
    src: "https://kontakt.az/wp-content/uploads/2022/09/1280px-PlayStation_logo_and_wordmark.svg-1_png.webp",
  },
  {
    id: 9,
    src: "https://kontakt.az/wp-content/uploads/2020/03/Samsung_png.webp",
  },
  {
    id: 10,
    src: "https://kontakt.az/wp-content/uploads/2020/03/Bosh_png.webp",
  },
  {
    id: 11,
    src: "https://kontakt.az/wp-content/uploads/2021/11/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1_png.webp",
  },
];
