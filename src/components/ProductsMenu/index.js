import React from 'react'
import { Link } from 'react-router-dom'
import classes from './style.module.css'
import { useProductsContext } from '../../context/products_context'

const ProductsMenu = () => {
    const {state} = useProductsContext()
  return (
    <section className={state.isProdSidebarOpen ? classes.menu : classes.menuWide}>
      <div className={classes.menuHeader}>
        <div className={classes.productsCount}> {state.filteredProds.length} Products Found</div>
        <div>
            <form>
                <label>Sort By</label>        
            </form>
        </div>
      </div>
      <div className={classes.products}>
        {state.isLoading 
        ?
         'Sorry, no products matched your search'
         :
          state.filteredProds.map((prod)=>{
            return (
              <div className={classes.productItemContainer} key={prod.id} >
                <div className={classes.productItem}>
                <div className={classes.prodImg}>
                  <img className={classes.prodImgItem} src={prod.image} alt="" />
                </div>
                <div className={classes.prodName}>
                {prod.name.charAt(0).toUpperCase() + prod.name.slice(1)}
                </div>
                <div className={classes.prodPrice}>
                  <span className={classes.newPrice}>$ {prod.price.toFixed(2)}</span>
                  <span className={classes.oldPrice}>$ {prod.price.toFixed(2)}</span>
                </div>
              </div>
              </div>
                // <div key={prod.id} className={classes.productWrapper}>
                //          <div className={classes.wrapperItem}>
                //     <Link to={prod.id}>
                //             <img src={prod.image} style={{borderRadius:'5px',boxShadow:'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }} width='100%' height='230px' alt="" />
                //     </Link>
                //             <div className={classes.itemInfos}>
                //                 <span>{prod.name.charAt(0).toUpperCase() + prod.name.slice(1)}</span>
                //                 <span>$ {prod.price.toFixed(2)}</span>
                //             </div>
                //         </div>
                // </div> 
                    )
                })}
      </div>
    </section>
  )
}
    
export default ProductsMenu
