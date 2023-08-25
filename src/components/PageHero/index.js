import React from "react";
import { Link } from "react-router-dom";
import classes from "./style.module.css";

const PageHero = ({ title, product }) => {
  return (
    <section className={classes.pageHeroSection}>
      <div className={classes.pageHero}>
        <div className={classes.location}>
          <Link style={{ textDecoration: "none", color: "#00337C" }} to={"/"}>
            Home
          </Link>
          {product && (
            <Link
              style={{ textDecoration: "none", color: "#00337C" }}
              to={"/products"}
            >
              / Products
            </Link>
          )}{" "}
          / {title}
        </div>
        <div className={classes.title}>
            {title}
        </div>
        <div className={classes.desc}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, assumenda?</p>
        </div>
      </div>
    </section>
  );
};
export default PageHero;
