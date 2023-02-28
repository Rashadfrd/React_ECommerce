import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import CartButtons from './CartButtons'
import { links } from '../utils/constants'
import { useProductsContext } from '../context/products_context'


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
    <SidebarElement>
        <aside className={state.isSidebarOpen === true ? 'sidebar-active' : undefined}>
        <div className="container">
            <div className="logo-close">
                <div className="logo">Logo</div>
                <div className="close" onClick={sidebarHandler}><span><AiOutlineClose size={'30px'}/></span></div>
            </div>
        </div>
        <div className="navlinks">
                <ul>
                 {links.map((link)=>{
                    const{id,text,url} = link;
                    return <li key={id} className='menu-item'><Link onClick={sidebarHandler} style={{textDecoration:'none',width:'100%'}} to={url}>{text}</Link></li>
                  })}
                </ul>
                <CartButtons />
        </div>
        </aside>
    </SidebarElement>,
    document.getElementById('sideBar')
    )}
    </>
  )
}

const SidebarElement = styled.div`
    aside{
        position:fixed;
        height:100vh;
        width:100vw;
        background-color:white;
        display:flex;
        padding:20px 0;
        flex-direction:column;
        z-index:-2;
        align-items:center;
        transform:translate(-100%);
        transition:.5s;
    }
    .sidebar-active{
        transform:translate(0%);
        z-index:999;
    }
    .container{
        width:90%;
        .logo-close{
            display:flex;
            align-items:center;
            justify-content:space-between
        }
    }
    ul{
        padding:0;
        margin:40px 0 0 0
    }
    .navlinks{
        width:100%;
    }
    .menu-item{
        list-style:none;
        height:55px;
        margin:10px 0;
        display:flex;
        align-items:center;
        padding: 0 5%;
        transition: .3s
    }
    .menu-item:hover{
        background-color:#f1f5f8;
    }
    .menu-item:hover > a{
        transition:.5s;
        transform:translate(3%)
    }
    .cart{
        height:100px;
        width:100%
    }

    @media only screen and (min-width: 850px) {
        display:none
      }

`

export default SideBar
