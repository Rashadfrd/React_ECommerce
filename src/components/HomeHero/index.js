import React from "react";
import classes from "./style.module.css";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.heroTitle}>
        <h1>
          Get ready <br /> for challenges
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>

        <div className={classes.btnWrapper}>
          <Link className={classes.shopBtn} to={"/products"}>
            See Collection →
          </Link>
          <div className={classes.line}></div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
