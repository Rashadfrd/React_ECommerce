import React from 'react'
import styled from 'styled-components'
import { homeInfos } from '../utils/constants'

const InfoCards = () => {
  return (
    <Wrapper>
        {homeInfos.map((item)=>{
            return(
                <div key={item.id} className="card">
                    <div className="card-img">{item.icon}</div>
                    <div className="card-info">
                        <p className="text-title">{item.name}</p> 
                        <p className="text-body">{item.content}</p>
                    </div>
                </div>
            )
        })}
    </Wrapper>
  )
}

const Wrapper = styled.section`

display:flex;
align-items:center;
justify-content:space-around;
padding:5%;

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
 gap: 1em;
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
 display:flex;
align-items:center;
justify-content:center;
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
