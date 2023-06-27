import React, { useState } from 'react'
import classes from './style.module.css'
import {TfiPlus,TfiMinus} from 'react-icons/tfi'
import { useCartContext } from '../../context/cart_context';

const AddToCard = ({product}) => {
    const [amount,setAmount] = useState(1);
    const{dispatch} = useCartContext()

    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch({
            type:'ADDTOCART',
            payload:{
                id:product.id,
                name:product.name,
                price:product.price,
                image:product.image,
                amount:amount
            }
        })
    }

  return (
    <form method='post' onSubmit={submitHandler}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', marginTop:'7%'}}>
            <div style={{display:'flex', alignItems:'center', marginBottom:'2%'}}>
                <TfiMinus style={{cursor:'pointer'}} onClick={() => {setAmount(amount - 1)}} size={22} />
                <input className={classes.input} onChange={(e)=>{setAmount(e.target.value)}} value={amount} min={1} max={10} type='number' />
                <TfiPlus style={{cursor:'pointer'}} onClick={() => {setAmount(amount + 1)}} size={22} />
            </div>
            <button className={classes.submitBtn} type='submit'>ADD TO CART</button>
        </div>
    </form>
  )
}

export default AddToCard
