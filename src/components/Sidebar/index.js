import React from 'react'
import classes from './style.module.css'
import ReactDOM from 'react-dom'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-2.png'
import NavSideButtons from '../NavSideButtons'
import { links } from '../../utils/constants'
import { useProductsContext } from '../../context/products_context'


const SideBar = () => {
    const {state,dispatch} = useProductsContext();
    const sidebarHandler = () =>{
        dispatch({
            type:'SIDEBAR_CLOSE',
            val:false
        })
    }
  return (
    <>
    {ReactDOM.createPortal(
    <div className={classes.sidebar}>
        <aside className={state.isSidebarOpen === true ? `${classes.sidebarActive} ${classes.aside}` : `${classes.aside}`}>
        <div className={classes.container}>
            <div className={classes.logoClose}>
                <div className={classes.logo}><img src={logo} width={150} alt="" /></div>
                <div className={classes.close} onClick={sidebarHandler}><span><AiOutlineClose size={'30px'}/></span></div>
            </div>
        </div>
        <div className={classes.navlinks}>
                <ul className={classes.ul}>
                 {links.map((link)=>{
                    const{id,text,url} = link;
                    return <li key={id} className={classes.menuItem}><Link onClick={sidebarHandler} style={{textDecoration:'none',width:'100%'}} to={url}>{text}</Link></li>
                  })}
                </ul>
                <NavSideButtons />
        </div>
        </aside>
    </div>,
    document.getElementById('sideBar')
    )}
    </>
  )
}

export default SideBar
