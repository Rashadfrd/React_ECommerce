import React from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'

const ProductsSidebar = () => {
  const{state,dispatch} = useProductsContext()
  return (
    <Wrapper>
      <form>
        <div className="formItem">
          <h5>Category</h5>
          { state.categories.map((item,index)=>{
            return <button onClick={(e)=>{dispatch({type:'CATEGORY_FILTER',payload:e.target.textContent})}} className='category-btn' key={index} type='button'>{item.toUpperCase().substring(0,1) + item.slice(1)}</button>
          })}
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
    height:100vh;
    position:sticky;
    top:90px;
    margin-right:5%;
    padding:0 2% 2% 2%;
    
    .formItem{
      display:flex;
      flex-direction:column;
    }
    .category-btn{
      border:none;
      background:none;
      text-align:start;
      color:black
    }
    .category-btn:hover{
      color:blue
    }
`

export default ProductsSidebar
