import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import Spinner from './Spinner'

const FeaturedProducts = () => {
    const {state} = useProductsContext()
  return (
      <Wrapper>
        <div className="title">
            <h2>Featured Products</h2>
            <hr/>
        </div>
        <div className="featured-products">
            {state.isLoading 
            ? <Spinner /> 
            : state.featuredProducts.map((prod)=>{
                return(
                    <div key={prod.id} className="featured-products-item">
                        <img src={prod.image} style={{borderRadius:'5px',boxShadow:'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }} width='100%' height='230px' alt="" />
                        <div className='item-infos'>
                            <span>{prod.name.charAt(0).toUpperCase() + prod.name.slice(1)}</span>
                            <span>$ {prod.price.toFixed(2)}</span>
                        </div>
                    </div>
                )
            })
            }
        </div>
        <div className='btn-link'>
            <Link className='prodLinkBtn' to={'/products'}>All Products</Link>    
        </div>            
      </Wrapper>
  )
}

const Wrapper = styled.section`
    background-color:#f1f5f8;
    padding: 5%;

    h2{
        text-align:center;
        font-size:35px
    }
    .featured-products{
        display:flex;
        justify-content:space-around;
        align-items:center;
        padding: 5% 0
    }
    .featured-products-item{
        width:25%;
        object-fit:contain;
    }
    .item-infos{
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:18px;
        letter-spacing:3px
    }
    .btn-link{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .prodLinkBtn{
        padding:.5% 3%;
        border: 1px solid black;
        border-radius:5px;
        color:black;
        transition: .3s;
    }
    .prodLinkBtn:hover{
        background-color:black;
        color:white
    }

`

export default FeaturedProducts
