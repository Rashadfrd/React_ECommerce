import React from 'react'
import classes from './style.module.css'
import { useProductsContext } from '../../context/products_context'

const ProductsSidebar = () => {
  const{state,dispatch} = useProductsContext()

  return (
    <aside className={state.isProdSidebarOpen ? classes.prodSidebar : `${classes.clicked}`}>
      <div className={classes.prodSidebarHeader}>
        <button className={classes.prodSidebarFilter} onClick={()=>{dispatch({type:'PRODSIDEBAR_ACTIVE',val:false})}} >Filter</button>
        <button className={classes.prodSidebarClean}>Clean All</button>
      </div>
      <div className={classes.formItem}>
          <h5>Category</h5>
          { state.categories.map((item,index)=>{
            return <button onClick={(e)=>{dispatch({type:'CATEGORY_FILTER',payload:e.target.textContent})}} className={classes.categoryBtn} key={index} type='button'>{item.toUpperCase().substring(0,1) + item.slice(1)}</button>
          })}
      </div>
    </aside>
  )
}

export default ProductsSidebar
