import React from 'react'
import styled from 'styled-components'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaUserPlus, FaUserMinus} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import { useAuth0 } from "@auth0/auth0-react";

const CartButtons = () => {
  const {  isAuthenticated,loginWithRedirect, logout } = useAuth0();
  const {state} = useCartContext()
  console.log()
  return (
    <CartButtonsElement>
      <Link to='cart' style={{textDecoration:'none',color:'black'}}>
        <div className="cart-item">
          <span>Cart <AiOutlineShoppingCart size={'22px'}/> <span className='cart-amount'>{state.cartItems ? state.cartItems.length : 0}</span> </span>
        </div>
      </Link>
        <div className="cart-item">
          {isAuthenticated 
          ? 
            <span onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout <FaUserMinus size={25} /></span> 
          : 
            <span onClick={() => loginWithRedirect()}>Login <FaUserPlus size={25} /></span>
          }
        </div>
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
        position:relative;
        cursor:pointer
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
