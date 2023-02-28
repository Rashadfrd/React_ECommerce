import React, { useContext, useEffect, useReducer } from "react"
import cartReducer from "../reducers/cart_reducer"


export const CartContext = React.createContext()

const getLocalStorageItems = () => {
    let cart = localStorage.getItem('cart')
    if(cart){
        return JSON.parse(localStorage.getItem('cart'))
    }
    else{
        return []
    }
}
const getLocalStorageAmount = () => {
    let amount = localStorage.getItem('totalAmount')
    if(amount){
        return JSON.parse(localStorage.getItem('totalAmount'))
    }
    else{
        return 0
    }
}

const CartProvider = ({children}) => {

    const[state,dispatch] = useReducer(cartReducer,{
        cartItems: getLocalStorageItems(),
        totalAmount:getLocalStorageAmount()
    })

    
    const data = {
        state,
        dispatch
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cartItems))
        localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
    },[state])

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export const useCartContext = () => {
    return useContext(CartContext)
}