import React from "react";
import classes from "./style.module.css";
import { homeInfos } from "../../utils/constants";

const InfoCards = () => {
  return (
    <section className={classes.infoCard}>
      {homeInfos.map((item, index) => {
        return (
        <React.Fragment key={item.id}>
          <div className={classes.card}>
            <div className={classes.cardLeft}>
              {item.icon}
            </div>
            <div className={classes.cardInfo}>
              <p className={classes.textTitle}>{item.name}</p>
              <p className={classes.textBody}>{item.content}</p>
            </div>
          </div>
          {
            index !== homeInfos.length-1 &&
            <div className={classes.line}></div>
          }
        </ React.Fragment>
        );
      })}
    </section>
  );
};

export default InfoCards;
