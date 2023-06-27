import React from 'react'
import classes from './style.module.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import { useCartContext } from '../../context/cart_context'
import { useAuth0 } from "@auth0/auth0-react";

const NavSideButtons = () => {
  const location = useLocation()
  const {isAuthenticated,loginWithRedirect, logout} = useAuth0();
  const {state} = useCartContext()

  return (
    <div className={classes.navSideButtons}>
      <Link to='cart' style={{textDecoration:'none',color:'black'}}>
        <div className={location.pathname.length > 1 ? classes.itemSecond : classes.item}>
          <span>Cart <AiOutlineShoppingCart size={'22px'}/> <span className={classes.cartAmount}>{state.cartItems ? state.cartItems.length : 0}</span> </span>
        </div>
      </Link>
        <div className={location.pathname.length > 1 ? classes.itemSecond : classes.item}>
          {isAuthenticated 
          ? 
            <span onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</span> 
          : 
            <span onClick={() => loginWithRedirect()}>Login</span>
          }
        </div>
    </div>
  )
}

export default NavSideButtons
