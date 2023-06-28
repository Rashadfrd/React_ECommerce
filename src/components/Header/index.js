import classes from './style.module.css'
import React from 'react'
import { NavLink,Link, useLocation } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import NavSideButtons from '../NavSideButtons'
import { links } from '../../utils/constants'
import img from '../../assets/logo-2.png'
import imgSecond from '../../assets/logo-3.png'
import { useProductsContext } from '../../context/products_context'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {

    const location = useLocation()
    const{isAuthenticated} = useAuth0()
    const {dispatch} = useProductsContext();

    const sidebarHandler = () =>{
        dispatch({
            type:'SIDEBAR_ACTIVE',
            val:true
        })
    }
  return (
    <header className={location.pathname.length > 1 ? `${classes.header} ${classes.headerSticky}`: `${classes.header} ${classes.headerAbsolute}`}>
        <div>
            <Link to={'/'}><img src={location.pathname.length > 1 ? img : imgSecond} width={location.pathname.length > 1 ? '150' : '60'} alt="" /></Link>
        </div>
        <nav className={classes.nav}>
            {links.map((link)=>{
                const{id,text,url} = link;
                return <NavLink key={id} to={url} className={location.pathname.length > 1 ? location.pathname === url ? `${classes.navItemSecond} ${classes.active}` : classes.navItemSecond : location.pathname === url ? `${classes.navItem} ${classes.active}` : classes.navItem}>{text}</NavLink>
            })}
            {
                isAuthenticated && <NavLink to='/checkout' className={classes.navItem}>Checkout</NavLink>
            }
        </nav>
        <div className={classes.navCart}>
            <NavSideButtons />
        </div>
        <div className={classes.menuBtn} onClick={sidebarHandler}><span><AiOutlineMenu   size={'30px'} /></span></div>
    </header>
  )
}

export default Navbar


