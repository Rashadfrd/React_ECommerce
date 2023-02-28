const cartReducer = (state,action) => {
    if(action.type === 'ADDTOCART'){
        const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount
        let tempArr = state.cartItems
        if (tempArr.filter(x=>x.name === action.payload.name).length === 0) {
            tempArr.push({
                name:action.payload.name,
                price: action.payload.price,
                image: action.payload.image,
                id: action.payload.id,
                subTotal: action.payload.price * action.payload.amount,
                amount : action.payload.amount
            })
        } 
        else {
            let item = tempArr.find(x=>x.name === action.payload.name)
             item.amount += action.payload.amount
             item.subTotal = item.price * item.amount
        }
        return{
            ...state,
            cartItems : tempArr,
            totalAmount : updatedTotalAmount
        }
    }

    if(action.type === 'CARTITEMDELETE'){
        let filteredArr = state.cartItems.filter(x=>x.id !== action.payload)
        let filteredProd = state.cartItems.find(x=>x.id === action.payload)
        let updatedTotalAmount = state.totalAmount - filteredProd.amount * filteredProd.price

        return{
            ...state,
            cartItems:filteredArr,
            totalAmount:updatedTotalAmount
        }
    }

    if(action.type === 'CLEARALLCART'){

        return{
            ...state,
            cartItems:[],
            totalAmount:0
        }
    }
}

export default cartReducer