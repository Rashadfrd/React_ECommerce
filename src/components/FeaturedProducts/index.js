import React from 'react'
import { Link } from 'react-router-dom'
import classes from './style.module.css'
import { useProductsContext } from '../../context/products_context'
import Spinner from '../Loader'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedProducts = () => {
    const {state} = useProductsContext()
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };    
  return (
      <section className={classes.featuredSection}>
        <div className={classes.title}>
            <h2>Featured Products</h2>
            <hr/>
        </div>
        <Slider {...settings} className={classes.featuredProducts}>
            {state.isLoading 
            ? <Spinner /> 
            : state.featuredProducts.map((prod)=>{
                return(
                    <div key={prod.id} className={classes.featuredProductsItem}>
                        <Link to={`/products/${prod.id}`}>

                        <img src={prod.image}className={classes.prodImg} alt="" />
                        </Link>
                        <div className={classes.itemInfos}>
                            <span>{prod.name.charAt(0).toUpperCase() + prod.name.slice(1)}</span>
                            <span>$ {prod.price.toFixed(2)}</span>
                        </div>
                    </div>
                )
            })
            }
        </Slider>
        <div className={classes.btnLink}>
            <Link className={classes.prodLinkBtn} to={'/products'}>All Products</Link>    
        </div>            
      </section>
  )
}


export default FeaturedProducts
