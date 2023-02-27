import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'

const ProductsMenu = () => {
    const {state} = useProductsContext()
  return (
    <Wrapper>
      <div className='menu-header'>
        <div className="products-count"> {state.filteredProds.length} Products Found</div>
        <hr style={{width:'65%'}} />
        <div>
            <form>
                <label>Sort By</label>        
            </form>
        </div>
      </div>
      <div className='products'>
        {state.isLoading 
        ?
         'Sorry, no products matched your search'
         :
          state.filteredProds.map((prod)=>{
            return (
                <div key={prod.id} className='product-wrapper'>
                         <div className="wrapper-item">
                    <Link to={prod.id}>
                            <img src={prod.image} style={{borderRadius:'5px',boxShadow:'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }} width='100%' height='230px' alt="" />
                    </Link>
                            <div className='item-infos'>
                                <span>{prod.name.charAt(0).toUpperCase() + prod.name.slice(1)}</span>
                                <span>$ {prod.price.toFixed(2)}</span>
                            </div>
                        </div>
                </div> 
                    )
                })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    width:70%;
    position:sticky;
    top:0;

    .menu-header{
        display:flex;
        align-items:center;
        justify-content:space-between
    }
    .products{
        display:flex;
        align-items:center;
        justify-content:flex-start;
        flex-wrap:wrap;
        padding: 5% 0
    }
    .product-wrapper{
        width:32%;
        padding:1%;
    }
    .wrapper-item{
        object-fit:contain;
    }
    .item-infos{
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:18px;
        letter-spacing:3px
    }

    @media only screen and (max-width: 1350px) {
        .product-wrapper{
            width:calc(100% / 2.2);
            padding:1%;
        }
      }
      @media only screen and (max-width: 850px) {
        .product-wrapper{
            width:calc(80%);
            padding:1%;
        }
        .products{
            justify-content:center;
        }
      }
      @media only screen and (max-width: 600px) {
        .product-wrapper{
            width:calc(100%);
            padding:1%;
        }
        .products{
            justify-content:center;
        }
      }
`
    
export default ProductsMenu
