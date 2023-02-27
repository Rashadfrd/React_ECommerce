import React, { useContext, useReducer } from "react"
import cartReducer from "../reducers/cart_reducer"


export const CartContext = React.createContext()


const CartProvider = ({children}) => {

    const[state,dispatch] = useReducer(cartReducer,{
        cartItems:[],
        totalAmount:0
    })

    const data = {
        state,
        dispatch
    }
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