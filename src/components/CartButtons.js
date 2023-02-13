import React from 'react'
import styled from 'styled-components'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const CartButtons = () => {
  return (
    <CartButtonsElement>
        <div className="cart-item"><span>Cart <AiOutlineShoppingCart size={'22px'}/> <span className='cart-amount'>0</span> </span></div>
        <div className="cart-item"><span>Login</span></div>
    </CartButtonsElement>
  )
}

const CartButtonsElement = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    .cart-item{
        margin:10px;
        font-size:20px;
        position:relative
    }
    .cart-amount{
        z-index:2;
        position:absolute;
        top:-10px;
        right:-8px;
        background-color:red;
        border-radius:50%;
        padding: 0 4px;
        font-size:15px;
        color:white;
    }

`

export default CartButtons
