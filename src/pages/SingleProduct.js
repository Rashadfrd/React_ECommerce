import React, { useEffect } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import PageHero from '../components/PageHero'
import styled from 'styled-components'
import AddToCard from '../components/AddToCard'
import Spinner from '../components/Spinner'

const SingleProduct = () => {
  const data = useProductsContext()
  const param = useParams()
  const navigate = useNavigate();

  const{singleProduct} = data.state

  useEffect(() => {
    setTimeout(() => {
      if(data.state.singleIsFailed)
      navigate('/')
    }, 2000);
  },[data.state.singleIsFailed])

  useEffect(() => {
    data.fetchSingle(param.id)
  },[])
  if(data.state.singleIsLoading){
    return(
      <Wrapper>
        <h1><Spinner /></h1>
      </Wrapper>
    )
  }
  if(data.state.singleIsFailed){
    return(
      <Wrapper>
        <h1>Something went wrong</h1>
    </Wrapper>
    )
  }
  if(data.state.singleProduct){
    return(
      <>
      <PageHero title={singleProduct.name} product />
      <Wrapper>
        <div className='content'>
          <div className='image'>
            <img width={600} height={500} src={singleProduct.image} alt="" />
          </div>
          <div className='prod-info'>
            <div className='prod-name'>
              <h2>{singleProduct.name}</h2>
            </div>
            <div className='prod-price prod-item' style={{fontSize:'20px',letterSpacing:'2px'}}>
              <span>${singleProduct.price}</span>
            </div>
            <div className='prod-desc prod-item'>
              <p style={{margin:'0',textAlign:'justify'}}>{singleProduct.desc}{singleProduct.desc}{singleProduct.desc}</p>
            </div>
            <div className='prod-company prod-item'>
              <span style={{fontWeight:'bold'}}>Company:</span> <span>{singleProduct.company}</span>
            </div>
            <div className='prod-category prod-item'>
              <span style={{fontWeight:'bold'}}>Category:</span> <span>{singleProduct.category}</span>
            </div>
            <hr />
            <AddToCard product={singleProduct} />
          </div>
        </div>
      </Wrapper>
      </>
    )
  }
}

const Wrapper = styled.section`
  min-height:82.5vh;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:5% 0;

  .content{
    display:flex;
    width:1100px;
  }
  .prod-info{
    padding:0 2%
  }
  .prod-item{
    padding:2% 0
  }

`

export default SingleProduct
