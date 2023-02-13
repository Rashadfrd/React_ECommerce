import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterElement>
      Footer
    </FooterElement>
  )
}
const FooterElement = styled.footer`
    height:50px;
    background-color:black;
    color:white;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center
`
export default Footer