import React from 'react'
import styled from 'styled-components'
import PageHero from '../components/PageHero'
import img from '../assets/page_hero.jpg'

const About = () => {
  return (
    <section>
      <PageHero title={'About'} />
      <Wrapper>
        <div className="about-left">
          <img className='heroImg' src={img} style={{borderRadius:'4%'}} alt="" />
        </div>
        <div className="about-right">
          <h2>About Us</h2>
          <hr/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi ipsam aliquid. Fugit, quisquam, qui placeat sequi enim inventore dolorem, veniam culpa vel nulla unde. Officiis praesentium et nulla cumque nihil perspiciatis blanditiis eveniet exercitationem ullam quasi culpa dicta, molestias eum? Exercitationem nam id quaerat, est eaque a debitis ducimus ipsum corporis consequuntur autem, maxime, odit voluptatum? Culpa voluptates amet perferendis, fugiat perspiciatis qui consectetur atque, temporibus veritatis obcaecati iure earum! Veniam tempore minus deleniti quisquam. Eveniet officiis inventore commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit doloremque rerum incidunt doloribus molestias! </p>
        </div>
      </Wrapper>
    </section>
  )
}
const Wrapper = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center
  width:100%;
  padding: 5% 0;
  .about-left{
    width:43%;
    object-fit:contain;
    display:flex;
    justify-content:flex-end;
    align-items:center;

  }
  .about-right{
    width:43%;
    h2{
      font-size:32px;
      margin:0
    }
    p{
      text-align:justify;
      width:100%;
    }
  }
  .heroImg{
    width:90%;
    height:420px
  }
  @media only screen and (max-width: 1161px) {
    flex-direction:column;
    justify-content:center;
    align-items:center;
    .about-left{
      width:100%;
      justify-content:center;
      margin:40px 0
    }
    .about-right{
      width:100%
    }
  }
  @media only screen and (max-width: 590px) {
    .heroImg{
      height:250px
    }
  }
`
export default About
