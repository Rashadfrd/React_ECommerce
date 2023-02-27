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
        filteredProds:[],
        singleProduct:{},
        singleIsLoading:false,
        singleIsFailed:false
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
    const fetchSingle = async(id) => {
        dispatch({type:'SINGLEFETCH_BEGIN'})
        try {
            const response = await axios.get('https://react-ecommerce-63789-default-rtdb.firebaseio.com/products.json')
            const prods = []
            for( const key in response.data){
                prods.push({
                    id : key,
                    name:response.data[key].name,
                    category:response.data[key].category,
                    desc:response.data[key].desc,
                    price:response.data[key].price,
                    image:response.data[key].image,
                    company:response.data[key].company,
                    featured:response.data[key].featured
                })
            }
            dispatch({
                type:'GET_SINGLE',
                payload:prods.find(x=>x.id === id)
            })
        } catch (error) {
            dispatch({type:'SINGLEFETCH_ERROR'})
        }
    }

    useEffect(() => {
        fetchProducts();
    },[])

    const data = {
        state,
        dispatch,
        fetchSingle
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