import React, { useState } from 'react'
import styled from 'styled-components'
import {TfiPlus,TfiMinus} from 'react-icons/tfi'
import { useCartContext } from '../context/cart_context';

const AddToCard = ({product}) => {
    const [amount,setAmount] = useState(1);
    const{dispatch} = useCartContext()

    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch({
            type:'ADDTOCART',
            payload:{
                name:product.name,
                price:product.price,
                amount:amount
            }
        })
    }

  return (
    <form method='post' onSubmit={submitHandler}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', marginTop:'7%'}}>
            <div style={{display:'flex', alignItems:'center', marginBottom:'2%'}}>
                <TfiMinus style={{cursor:'pointer'}} onClick={() => {setAmount(amount - 1)}} size={22} />
                <Input onChange={(e)=>{setAmount(e.target.value)}} value={amount} min={1} max={10} type='number' />
                <TfiPlus style={{cursor:'pointer'}} onClick={() => {setAmount(amount + 1)}} size={22} />
            </div>
            <Button type='submit'>ADD TO CART</Button>
        </div>
    </form>
  )
}

const Input = styled.input`
    padding:2%;
    margin-right:10px;
    text-align:center;
    font-size:20px;
    border-radius:10px;
    border: none;
    &:focus{
        outline:none
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

`
const Button = styled.button`
    border:1px solid #696969;
    border-radius:10px;
    background-color:white;
    transition:.3s;
    padding:3% 2%;
    margin-top:8px;

    &:hover{
        background-color:black;
        color:white
    }
`

export default AddToCard
