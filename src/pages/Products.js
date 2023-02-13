import React from 'react'
import styled from 'styled-components'
import PageHero from '../components/PageHero'
import ProductsMenu from '../components/ProductsMenu'
import ProductsSidebar from '../components/ProductsSidebar'

const Products = () => {
  return (
    <div>
      <PageHero title={'Products'}/>
      <Wrapper>
        <ProductsSidebar />
        <ProductsMenu />
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.section`
  display:flex;
  justify-content:center;
  padding: 5% 0;

`

export default Products
