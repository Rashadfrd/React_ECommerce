import React, { useRef } from "react";
import { Link } from "react-router-dom";
import classes from "./style.module.css";
import { useProductsContext } from "../../context/products_context";
import Spinner from "../Loader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedProducts = () => {
  const { state } = useProductsContext();
  const slider = useRef()

  const nextOne = () => {
    slider.current.slickNext()
  };

  const previousOne = () => {
    slider.current.slickPrev()
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className={classes.featuredSection}>
      <div className={classes.titleAndButtons}>
        <h2 className={classes.title}>Featured Products</h2>
        <div className={classes.sliderButtons}>
          <button onClick={previousOne} className={classes.sliderLeft}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.46967 4.46967C0.176777 4.76256 0.176777 5.23744 0.46967 5.53033L4.46967 9.53033C4.76256 9.82322 5.23744 9.82322 5.53033 9.53033C5.82322 9.23744 5.82322 8.76256 5.53033 8.46967L2.81066 5.75L13 5.75C13.4142 5.75 13.75 5.41421 13.75 5C13.75 4.58579 13.4142 4.25 13 4.25L2.81066 4.25L5.53033 1.53033C5.82322 1.23744 5.82322 0.762563 5.53033 0.46967C5.23744 0.176776 4.76256 0.176776 4.46967 0.46967L0.46967 4.46967Z"
                fill="#131118"
              />
            </svg>
          </button>
          <button onClick={nextOne} className={classes.sliderRight}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.5303 4.46967C13.8232 4.76256 13.8232 5.23744 13.5303 5.53033L9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967L11.1893 5.75L1 5.75C0.585787 5.75 0.25 5.41421 0.25 5C0.25 4.58579 0.585787 4.25 1 4.25L11.1893 4.25L8.46967 1.53033C8.17678 1.23744 8.17678 0.762563 8.46967 0.46967C8.76256 0.176776 9.23744 0.176776 9.53033 0.46967L13.5303 4.46967Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      {state.isLoading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spinner />
        </div>
      )}
      <Slider ref={slider} {...settings} className={classes.featuredProducts}>
        {state &&
          state.featuredProducts.map((prod) => {
            return (
              <div key={prod.id} className={classes.featuredProductsItem}>
                <Link
                  className={classes.prodImgWrapper}
                  to={`/products/${prod.id}`}
                >
                  <img src={prod.image} className={classes.prodImg} alt="" />
                  <span className={classes.itemInfos}>
                    {prod.name.charAt(0).toUpperCase() + prod.name.slice(1)}
                  </span>
                </Link>
              </div>
            );
          })}
      </Slider>
      <div className={classes.btnLink}>
        <Link className={classes.prodLinkBtn} to={"/products"}>
          All Products
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
