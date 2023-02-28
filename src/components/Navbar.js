import React from 'react'
import styled from 'styled-components'
import { NavLink,Link } from 'react-router-dom'
import {GrMenu} from 'react-icons/gr'
import CartButtons from './CartButtons'
import { links } from '../utils/constants'
import img from '../assets/logo.png'
import { useProductsContext } from '../context/products_context'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
    const{isAuthenticated} = useAuth0()
    const {dispatch} = useProductsContext();

    const sidebarHandler = () =>{
        dispatch({
            type:'SIDEBAR_ACTIVE',
            val:true
        })
    }
  return (
    <Header>
        <div className="nav-header">
            <Link to={'/'}><img src={img} width='130' alt="" /></Link>
        </div>
        <nav>
            {links.map((link)=>{
                const{id,text,url} = link;
                return <NavLink key={id} to={url} className='nav-item'>{text}</NavLink>
            })}
            {
                isAuthenticated && <NavLink to='/checkout' className='nav-item'>Checkout</NavLink>
            }
        </nav>
        <div className="nav-cart">
            <CartButtons />
        </div>
        <div className='menu-btn' onClick={sidebarHandler}><span><GrMenu size={'30px'} /></span></div>
    </Header>
  )
}

const Header = styled.header`
    height:80px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    padding:0 10px;
    position:sticky;
    top:0;
    background-color:white;
    z-index:10;

    .nav-item{
        text-decoration:none;
        margin:10px;
        color:black
    }
    .active{
        border-bottom:2px solid gray
    }
    .menu-btn{
        display:none;
        cursor:pointer
    }

    @media only screen and (max-width: 850px) {
        nav{
            display:none
        }
        .menu-btn{
            display:block
        }
        .nav-cart{
            display:none
        }
      }
`

export default Navbar

