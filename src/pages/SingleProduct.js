import React, { useEffect } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import PageHero from '../components/PageHero'

const SingleProduct = () => {
  const data = useProductsContext()
  const param = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    console.log(data.state.singleIsFailed)
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
      <h1>loading</h1>
    )
  }
  if(data.state.singleIsFailed){
    return(
      <h1>Something went wrong</h1>
    )
  }
  if(data.state.singleProduct){
    return(
      <>
      <PageHero title={data.state.singleProduct.name} product />
      <span>{data.state.singleProduct.name}</span>
    </>
    )
  }
}

export default SingleProduct
