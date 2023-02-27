const cartReducer = (state,action) => {
    if(action.type === 'ADDTOCART'){
        const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount
        let tempArr = state.cartItems
        if (tempArr.filter(x=>x.name === action.payload.name).length === 0) {
            tempArr.push({
                name:action.payload.name,
                price: action.payload.price,
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
}

export default cartReducer