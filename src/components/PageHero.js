import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PageHero = ({title,product}) => {
  return (
    <Wrapper>
      <Link style={{textDecoration:'none',color:'#00337C'}} to={'/'}>Home</Link>{product && <Link style={{textDecoration:'none',color:'#00337C'}} to={'/products'}>/ Products</Link>} / {title}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    height:130px;
    width:100%;
    background-color:#f1f5f8;
    display:flex;
    justify-content:center;
    align-items:center;
`
export default PageHero
