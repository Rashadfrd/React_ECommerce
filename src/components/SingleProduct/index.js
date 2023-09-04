import React, { useEffect } from "react";
import classes from "./style.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProductsContext } from "../../context/products_context";
import AddToCard from "../../components/AddToCard";
import Spinner from "../../components/Loader";
import ReactStars from "react-rating-stars-component";
import {BsChevronDown} from 'react-icons/bs'

const SingleProduct = () => {
  const data = useProductsContext();
  const param = useParams();
  const navigate = useNavigate();

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const { singleProduct } = data.state;

  useEffect(() => {
    setTimeout(() => {
      if (data.state.singleIsFailed) navigate("/");
    }, 2000);
  }, [data.state.singleIsFailed]);

  useEffect(() => {
    data.fetchSingle(param.id);
  }, []);
  if (data.state.singleIsLoading) {
    return (
      <section className={classes.singleProduct}>
        <h1>
          <Spinner />
        </h1>
      </section>
    );
  }
  if (data.state.singleIsFailed) {
    return (
      <section className={classes.singleProduct}>
        <h1>Something went wrong</h1>
      </section>
    );
  }
  if (data.state.singleProduct) {
    return (
      <section className={classes.singleProduct}>
        <div className={classes.singleProductLeft}>
          <div className={classes.singleProductLeftImgContainer}>
            <img
              className={classes.singleProductLeftImg}
              src={singleProduct.image}
              alt=""
            />
          </div>
        </div>
        <div className={classes.singleProductRight}>
          <div className={classes.breadCrumb}>
            <Link className={classes.breadCrumbItem} to="/">
              Home
            </Link>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M4.58398 3L7.58398 6L4.58398 9"
                  stroke="#605F5F"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <Link className={classes.breadCrumbItem} to="/products">
              Products
            </Link>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M4.58398 3L7.58398 6L4.58398 9"
                  stroke="#605F5F"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className={classes.breadCrumbItem}>
              {singleProduct.category}
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M4.58398 3L7.58398 6L4.58398 9"
                  stroke="#605F5F"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className={classes.breadCrumbItem}>{singleProduct.name}</span>
          </div>
          <div className={classes.singleProductNameAndDesc}>
            <h2 className={classes.singleProductName}>{singleProduct.name}</h2>
            <p className={classes.singleProductDesc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              eligendi a in aperiam ipsa ut. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Placeat eligendi a in aperiam ipsa
              ut.
            </p>
          </div>
          <div className={classes.singleProductReviews}>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              activeColor="#ffd700"
            />
            <span>23 reviews</span>
          </div>
          <div className={classes.singleProductPrice}>
            <span className={classes.newPrice}>
              $ {singleProduct.price && singleProduct.price.toFixed(2)}
            </span>
            <span className={classes.oldPrice}>
              $ {singleProduct.price && singleProduct.price.toFixed(2)}
            </span>
          </div>
          <div className={classes.singleProductCategoryCompany}>
            <div className={classes.singleProductCompany}>
              <span>Company:</span> <span>{singleProduct.company}</span>
            </div>
            <div className={classes.singleProductCategory}>
              <span>Category:</span> <span>{singleProduct.category}</span>
            </div>
          </div>
          <div className={classes.singleProductCategoryColorAndSize}>
            <div className={classes.singleProductCategoryColor}>
                <span>Color:</span>
                <div>
                    <select>
                        <option value="" key="">Choose a color</option>
                        <option value="" key="">Red</option>
                        <option value="" key="">Blue</option>
                        <option value="" key="">White</option>
                        <option value="" key="">Gray</option>
                    </select>
                    <BsChevronDown className={classes.singleProductSelectIcon} />
                </div>
            </div>
            <div className={classes.singleProductCategorySize}>
                <span>Size:</span>
                <div>
                    <select>
                        <option value="" key="">Choose a size</option>
                        <option value="" key="">S</option>
                        <option value="" key="">M</option>
                        <option value="" key="">L</option>
                        <option value="" key="">XL</option>
                    </select>
                    <BsChevronDown className={classes.singleProductSelectIcon} />
                </div>
            </div>
          </div>
          <hr />
          <AddToCard product={singleProduct} />
        </div>
      </section>
    );
  }
};

export default SingleProduct;
