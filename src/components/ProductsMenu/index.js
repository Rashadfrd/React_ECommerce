import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import classes from "./style.module.css";
import { useProductsContext } from "../../context/products_context";
import Skeleton from "../Skeleton";
import { useState } from "react";

const ProductsMenu = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 970);
  const { state, dispatch } = useProductsContext();

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 970;
      setIsMobile(newIsMobile);

      // Check if the viewport width is below 736 and update your context state
      if (newIsMobile) {
        dispatch({ type: "PRODSIDEBAR_ACTIVE", val: false })
      }
      else{
        dispatch({ type: "PRODSIDEBAR_ACTIVE", val: true })
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [state.isProdSidebarOpen]);
  return (
    <section
      className={state.isProdSidebarOpen ? classes.menu : classes.menuWide}
    >
      <div className={classes.menuHeader}>
        <div className={classes.productsCount}>
          <button
            className={classes.prodSidebarFilter}
            onClick={() => {
              dispatch({ type: "PRODSIDEBAR_ACTIVE", val: true });
            }}
          >
            Filter
          </button>{" "}
          {state.filteredProds.length} Products Found
        </div>
        <div>
          <form>
            <label>Sort By</label>
          </form>
        </div>
      </div>
      <div className={classes.products}>
        {state.isLoading &&
          Array(6)
            .fill(null)
            .map((index) => {
              return (
                <div
                  className={classes.productItemContainer}
                  key={index + Math.random()}
                >
                  <div className={classes.productItem}>
                    <div className={classes.prodImg}>
                      <Skeleton className={classes.prodImgItem} />
                    </div>
                    <div className={classes.prodName}>
                      <Skeleton width={100} height={20} />
                    </div>
                    <div className={classes.prodPrice}>
                      <span className={classes.newPrice}>
                        <Skeleton width={50} height={20} />
                      </span>
                      <span className={classes.oldPrice}>
                        <Skeleton width={50} height={20} />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        {state &&
          state.filteredProds.map((prod) => {
            return (
              <div className={classes.productItemContainer} key={prod.id}>
                <div className={classes.productItem}>
                  <Link to={prod.id} className={classes.prodImg}>
                    <div className={classes.prodActionVertical}>
                      <button
                        onClick={() => {
                          console.log("clicked");
                        }}
                        className={classes.addToBasket}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 16 16"
                          height="22px"
                          width="22px"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"></path>
                        </svg>
                      </button>
                      <button className={classes.quickView}>.</button>
                    </div>
                    <div className={classes.prodLink}>
                      <button className={classes.prodLinkBtn}>
                        View Product
                      </button>
                    </div>
                    <img
                      className={classes.prodImgItem}
                      src={prod.image}
                      alt=""
                    />
                  </Link>
                  <div className={classes.prodName}>
                    {prod.name.charAt(0).toUpperCase() + prod.name.slice(1)}
                  </div>
                  <div className={classes.prodPrice}>
                    <span className={classes.newPrice}>
                      $ {prod.price.toFixed(2)}
                    </span>
                    <span className={classes.oldPrice}>
                      $ {prod.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default ProductsMenu;
