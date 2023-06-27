import React from 'react'
import { Link } from 'react-router-dom'
import classes from './style.module.css'
import { useProductsContext } from '../../context/products_context'
import Spinner from '../Loader'

const FeaturedProducts = () => {
    const {state} = useProductsContext()
  return (
      <section className={classes.featuredSection}>
        <div className={classes.title}>
            <h2>Featured Products</h2>
            <hr/>
        </div>
        <div className={classes.featuredProducts}>
            {state.isLoading 
            ? <Spinner /> 
            : state.featuredProducts.map((prod)=>{
                return(
                    <div key={prod.id} className={classes.featuredProductsItem}>
                        <Link to={`/products/${prod.id}`}>

                        <img src={prod.image} style={{borderRadius:'5px',boxShadow:'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }} width='100%' height='230px' alt="" />
                        </Link>
                        <div className={classes.itemInfos}>
                            <span>{prod.name.charAt(0).toUpperCase() + prod.name.slice(1)}</span>
                            <span>$ {prod.price.toFixed(2)}</span>
                        </div>
                    </div>
                )
            })
            }
        </div>
        <div className={classes.btnLink}>
            <Link className={classes.prodLinkBtn} to={'/products'}>All Products</Link>    
        </div>            
      </section>
  )
}


export default FeaturedProducts
