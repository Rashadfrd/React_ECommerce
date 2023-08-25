import React from 'react'
import classes from './style.module.css'
import {BsHandbag} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
import { useCartContext } from '../../context/cart_context'
import { useAuth0 } from "@auth0/auth0-react";

const NavSideButtons = () => {
  const location = useLocation()
  const {isAuthenticated,loginWithRedirect, logout} = useAuth0();
  const {state} = useCartContext()

  return (
    <div className={classes.navSideButtons}>
        <div className={classes.itemSecond}>
          {isAuthenticated 
          ? 
            <span onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</span> 
          : 
            <span onClick={() => loginWithRedirect()}><BiUser size={'25px'} /></span>
          }
        </div>
      <Link to='cart' style={{textDecoration:'none',color:'black'}}>
        <div className={classes.itemSecond}>
          <div><BsHandbag size={'22px'}/> </div> <div className={classes.cartAmount}>{state.cartItems ? state.cartItems.length : 0}</div>
        </div>
      </Link>
    </div>
  )
}

export default NavSideButtons
