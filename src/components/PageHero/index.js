import React from 'react'
import { Link } from 'react-router-dom'
import classes from './style.module.css'

const PageHero = ({title,product}) => {
  return (
    <div className={classes.pageHero}>
      <Link style={{textDecoration:'none',color:'#00337C'}} to={'/'}>Home</Link>
      {product && <Link style={{textDecoration:'none',color:'#00337C'}} to={'/products'}>/ Products</Link>} / {title}
    </div>
  )
}
export default PageHero
