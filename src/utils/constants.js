import React from "react";
import {AiOutlineShoppingCart, AiOutlineLock, AiOutlinePhone} from 'react-icons/ai'
import {BsCurrencyDollar} from 'react-icons/bs'

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
    icon: <BsCurrencyDollar size={38} />,
    name: "Money Back",
    content:
      "30 day guarantee",
  },
  {
    id: 3,
    icon: <AiOutlinePhone size={38} />,
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
    src: "https://freepngimg.com/thumb/nike_logo/4-2-nike-logo-png-clipart-thumb.png",
  },
  {
    id: 2,
    src: "https://loodibee.com/wp-content/uploads/Adidas-Logo.png",
  },
  {
    id: 3,
    src: "https://static.vecteezy.com/system/resources/previews/022/101/105/non_2x/supreme-logo-transparent-free-png.png",
  },
  {
    id: 4,
    src: "https://static.vecteezy.com/system/resources/previews/022/100/980/original/puma-logo-transparent-free-png.png",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/originals/8b/36/6a/8b366a2379f6d73aee1f1f28d5d71a9d.png",
  },
  {
    id: 6,
    src: "https://static.vecteezy.com/system/resources/previews/022/100/678/original/jordan-logo-transparent-free-png.png",
  }
];
