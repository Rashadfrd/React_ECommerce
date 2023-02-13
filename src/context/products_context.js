import axios from "axios";
import React, { useContext, useEffect } from "react"
import { useReducer } from "react"
import productsReducer from "../reducers/products_reducer";

export const ProductsContext = React.createContext()

const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(productsReducer,{
        isSidebarOpen:false,
        products:[],
        featuredProducts:[],
        categories:[],
        isLoading:false,
        isFailed:false,
        filteredProds:[]
    });

    const fetchProducts = async() => {
        dispatch({type:'PRODUCTFETCH_BEGIN'})
        try {
            const response = await axios.get('https://react-ecommerce-63789-default-rtdb.firebaseio.com/products.json')
            dispatch({
                type:'GET_PRODUCTS',
                payload:response.data
            })
        } catch (error) {
            dispatch({type:'PRODUCTFETCH_ERROR'})
        }
    }

    useEffect(() => {
        fetchProducts();
    },[])

    const data = {
        state,
        dispatch
    }

    return(
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    )
}
export default ProductsProvider

export const useProductsContext = () => {
    return useContext(ProductsContext)
}