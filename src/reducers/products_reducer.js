const productsReducer = (state,action) => {
    if(action.type === 'SIDEBAR_ACTIVE'){
        return{
            ...state,
            isSidebarOpen : action.val 
        }
    }
    if(action.type === 'SIDEBAR_CLOSE'){
        return{
            ...state,
            isSidebarOpen : action.val
        }
    }
    if(action.type === 'PRODUCTFETCH_BEGIN'){
        return{
            ...state,
            isLoading : true
        }
    }
    if(action.type === 'GET_PRODUCTS'){
        const products = []
        const type = 'category'

        // products.map((prod)=>{return prod.category})
        for (const key in action.payload) {
            products.push({
                id : key,
                name:action.payload[key].name,
                category:action.payload[key].category,
                desc:action.payload[key].desc,
                price:action.payload[key].price,
                image:action.payload[key].image,
                company:action.payload[key].company,
                featured:action.payload[key].featured
            })
        }

        const getUniqueValues = (products, type) => {
            let unique = products.map((item) => item[type])
            return ['all', ...new Set(unique)]
          }

        return{
            ...state,
            isLoading : false,
            products : products,
            filteredProds : products,
            featuredProducts : products.filter(x=>x.featured === true),
            categories : getUniqueValues(products,type)
        }
    }
    if(action.type === 'PRODUCTFETCH_ERROR'){
        return{
            ...state,
            isLoading : false,
            isFailed : true
        }
    }
    if(action.type === 'CATEGORY_FILTER'){
        let filteredProducts
        if (action.payload === 'All') {
             filteredProducts = state.products
        }
        else{
            filteredProducts = state.products.filter(x=>x.category === action.payload.charAt(0).toLowerCase() + action.payload.slice(1))
        }
        return{
            ...state,
            filteredProds : filteredProducts
        }
    }
    if(action.type === 'SINGLEFETCH_BEGIN'){
        return{
            ...state,
            singleIsLoading : true,
        }
    }
    if(action.type === 'GET_SINGLE'){
        return{
            ...state,
            singleIsLoading : false,
            singleIsFailed : false,
            singleProduct : action.payload
            
        }
    }
    if(action.type === 'SINGLEFETCH_ERROR'){
        return{
            ...state,
            singleIsLoading : false,
            singleIsFailed : true
        }
    }
}

export default productsReducer
