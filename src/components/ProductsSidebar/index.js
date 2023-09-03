import React, { useState } from "react";
import classes from "./style.module.css";
import { useProductsContext } from "../../context/products_context";
import Skeleton from "../Skeleton";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { sliderStyles } from "../../utils/constants";

const ProductsSidebar = () => {
  const { state, dispatch } = useProductsContext();
  const [priceFilter, setPriceFilter] = useState([0, 1000]);

  return (
    <section
      className={
        state.isProdSidebarOpen
          ? classes.prodSidebarWrapper
          : `${classes.clicked}`
      }
    >
      <aside className={classes.prodSidebar}>
        <div className={classes.prodSidebarHeader}>
          <button
            className={classes.prodSidebarFilter}
            onClick={() => {
              dispatch({ type: "PRODSIDEBAR_ACTIVE", val: false });
            }}
          >
            Filter
          </button>
          <button className={classes.prodSidebarClean}>Clean All</button>
        </div>
        <div className={classes.prodSidebarBottom}>
          {state.isLoading && (
            <>
              <div className={classes.formItem}>
                <h4>
                  <Skeleton width={100} height={30} />
                </h4>
                {Array(6)
                  .fill(null)
                  .map((item, index) => {
                    return (
                      <button className={classes.categoryBtn} key={index}>
                        <Skeleton width={80} height={20} />
                      </button>
                    );
                  })}
              </div>
            </>
          )}
          {!state.isLoading && (
            <>
              <div className={classes.formItem}>
                <h4>Category</h4>
                {state.categories.map((item, index) => {
                  return (
                    <button
                      onClick={(e) => {
                        dispatch({
                          type: "CATEGORY_FILTER",
                          payload: e.target.textContent,
                        });
                      }}
                      className={classes.categoryBtn}
                      key={index}
                      type="button"
                    >
                      {item.toUpperCase().substring(0, 1) + item.slice(1)}
                    </button>
                  );
                })}
              </div>
              <div className={classes.formItem}>
                <h4>Price</h4>
                <div className={classes.priceFilterSlider}>
                  <Slider
                    range
                    min={0}
                    max={1000}
                    step={50}
                    defaultValue={[0, 1000]}
                    onChange={(values) => {
                      setPriceFilter(values);
                      dispatch({
                        type:'PRICE_FILTER',
                        payload:{minPrice:values[0],maxPrice:values[1]}
                      })
                    }}
                    trackStyle={sliderStyles.trackStyle}
                    handleStyle={sliderStyles.handleStyle}
                  />
                </div>
                <div className={classes.priceFilterValues}>
                  <span className={classes.priceFilterValuesItem}>
                    ${priceFilter[0]}
                  </span>{" "}
                  -
                  <span className={classes.priceFilterValuesItem}>
                    ${priceFilter[1]}
                  </span>
                </div>
              </div>
              <div className={classes.formItem}>
                <h4>Category</h4>
                {state.categories.map((item, index) => {
                  return (
                    <button
                      onClick={(e) => {
                        dispatch({
                          type: "CATEGORY_FILTER",
                          payload: e.target.textContent,
                        });
                      }}
                      className={classes.categoryBtn}
                      key={index}
                      type="button"
                    >
                      {item.toUpperCase().substring(0, 1) + item.slice(1)}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </aside>
      <div className={classes.overlay}></div>
    </section>
  );
};

export default ProductsSidebar;
