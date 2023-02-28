import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import PageHero from '../components/PageHero'
import {FaTrashAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {state,dispatch} = useCartContext();
  const {cartItems} = state;
  return (
    <>
    <PageHero title='Cart' />
      {cartItems.length === 0 && 
        <Empty>
          <h2>Your cart is empty</h2>
          <Link className='btn btn-secondary' to='/products'>Fill it</Link>
        </Empty>
      }
      {cartItems.length !== 0 &&
      <Wrapper>
      <div className='cartItems-table'>
        <table className='tbl'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Subtotal</th>
            </tr>
          </thead>

          <tbody>
            {
              cartItems.map((prod)=>{
                return(
                  <tr key={prod.id}>
                    <td><img src={prod.image} width='110' height='80' alt="" /></td>
                    <td><span>{prod.name}</span></td>
                    <td><span>${prod.price.toFixed(2)}</span></td>
                    <td><span>{prod.amount}</span></td>
                    <td><span>${prod.subTotal.toFixed(2)}</span></td>
                    <td><button style={{margin:'0 auto'}} onClick={()=>{dispatch({type:'CARTITEMDELETE',payload:prod.id})}} className='button' type='button'><FaTrashAlt color='white' size={13} /></button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div className='action-buttons'>
        <div><Link className='btn btn-outline-secondary' to='/products'>Continue shopping</Link></div>
        <div><button onClick={() => {dispatch({type:'CLEARALLCART'})}} className='btn btn-outline-dark'>Clear Shopping Cart</button></div>
      </div>
      <div className='cartInfos-login'>
        <div className='cart-infos'>
          <div className='cart-infos-item'><span style={{fontSize:'20px'}}>Subtotal:</span> <span>${state.totalAmount.toFixed(2)}</span></div>
          <div className='cart-infos-item'><span style={{fontSize:'20px'}}>Shipping:</span> <span>$0</span></div>
          <hr />
          <div className='cart-infos-item'><span style={{fontSize:'30px',fontWeight:'500'}}>Subtotal:</span> <span>${state.totalAmount.toFixed(2)}</span></div>
        </div>
        <div className='login-btn'><button className='login btn btn-outline-secondary'>Login</button></div>
      </div>
    </Wrapper>
      }
    </>
  )
}

const Wrapper = styled.section`
  min-height:82.5vh;
  padding:5%;
  .tbl{
    width:100%;
    text-align:center;
  }
  td{
    width:100px;
    padding 1.5% 0;
  }
  th{
    width:100px;
  }
  tr{ 
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid #ccc
  }
  .button{
    border:none;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:5px;
    background-color:red;
    border-radius:15%;
  }
  .action-buttons{
    margin-top:30px;
    display:flex;
    justify-content:space-between;
  }
  .cartInfos-login{
    margin-top:30px;
    display:flex;
    flex-direction:column;
    align-items:flex-end
  }
  .cart-infos{
    border:1px solid #ccc;
    padding:3%;
    width:450px
  }
  .cart-infos-item{
    display:flex;
    align-items:center;
    justify-content:space-between
  }
  .login-btn{
    width:450px;
    padding:1% 0
  }
  .login{
    width:100%;
  }
 
`
const Empty = styled.div`
  min-height:65vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column
`

export default Cart
