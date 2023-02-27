import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  const date = new Date;
  const currentYear = date.getFullYear()
  return (
    <FooterElement>
      {currentYear} <span style={{margin:'10px'}}>Farhadzada Rashad</span>
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