import React, { useEffect } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'

const SingleProduct = () => {
  const data = useProductsContext()
  const param = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    data.fetchSingle(param.id)
  },[])
  return (
    <div>
      {
        data.state.singleIsLoading && 'loading'
      }
      {
        data.state.singleProduct && <span>{data.state.singleProduct.name}</span>
      }
      {
        data.state.singleIsFailed && <h1>There was an error</h1>
      }
    </div>
  )
}

export default SingleProduct
