import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import img from '../assets/hero-1.jpg'

const HomeHero = () => {
  return (
    <Wrapper>
        <div className='hero-title'>
            <h1>Get ready <br/> for challenges</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.  </p>

            <Link className='shopBtn' to={'/products'}>Shop Now</Link>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    height:745px;
    width:100%;
    background-image : url('${img}');
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    align-items:center;

    .hero-title{
        position:relative;
        top:10%;
        color:white;
        text-transform: capitalize;
        width:40vw;
        text-align:center;
        padding:15px;
        display:flex;
        align-items:center;
        flex-direction:column;
    }
    h1{
        font-size:45px;
        margin:0;
        padding:0;
    }
    p{
        padding: 0 45px;
        text-align:justify;
    }
    .shopBtn{
        padding:2% 8%;
        border: 2px solid white;
        border-radius:5px;
        text-decoration:none;
        color:white;
        transition: .3s;
    }
    .shopBtn:hover{
        background-color:white;
        color:green
    }
`

export default HomeHero
