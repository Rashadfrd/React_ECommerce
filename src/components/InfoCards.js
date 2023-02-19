import React from 'react'
import styled from 'styled-components'

const InfoCards = () => {
  return (
    <Wrapper>
        <div class="card">
        <div class="card-img"></div>
        <div class="card-info">
            <p class="text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate esse iure?</p>
            <p class="text-title">Autor</p>
        </div>
        </div>
        <div class="card">
        <div class="card-img"></div>
        <div class="card-info">
            <p class="text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate esse iure?</p>
            <p class="text-title">Autor</p>
        </div>
        </div>
        <div class="card">
        <div class="card-img"></div>
        <div class="card-info">
            <p class="text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate esse iure?</p>
            <p class="text-title">Autor</p>
        </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

display:flex;
align-items:center;
justify-content:space-around;
padding:25px;

/*Magic card*/
.card {
 width:350px;
 height: 254px;
 background: #f5f5f5;
 overflow: visible;
 box-shadow: 0 5px 20px 2px rgba(0,0,0,0.1);
 display: flex;
 flex-direction: column;
 align-items: center;
}

.card-info {
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 2em;
 padding: 0 1rem;
}

.card-img {
 --size: 100px;
 width: var(--size);
 height: var(--size);
 border-radius: 50%;
 transform: translateY(-50%);
 background: #42caff;
 background: linear-gradient(to bottom, #42caff 0%, #e81aff 100%);
 position: relative;
 transition: all .3s ease-in-out;
}

.card-img::before {
 content: "";
 border-radius: inherit;
 position: absolute;
 top: 50%;
 left: 50%;
 width: 90%;
 height: 90%;
 transform: translate(-50%, -50%);
 border: 1rem solid #e8e8e8;
}

/*Text*/
.text-title {
 text-transform: uppercase;
 font-size: 0.75em;
 color: #42caff;
 letter-spacing: 0.05rem;
}

.text-body {
 font-size: .8em;
 text-align: center;
 color: #6f6d78;
 font-weight: 400;
 font-style: italic;
}

/*Hover*/
.card:hover .card-img {
 --size: 110px;
 width: var(--size);
 height: var(--size);
}
`
export default InfoCards
