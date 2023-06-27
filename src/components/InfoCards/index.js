import React from 'react'
import classes from './style.module.css'
import { homeInfos } from '../../utils/constants'

const InfoCards = () => {
  return (
    <div className={classes.infoCard}>
        {homeInfos.map((item)=>{
            return(
                <div key={item.id} className={classes.card}>
                    <div className={classes.cardImg}>{item.icon}</div>
                    <div className={classes.cardInfo}>
                        <p className={classes.textTitle}>{item.name}</p> 
                        <p className={classes.textBody}>{item.content}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default InfoCards