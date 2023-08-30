import React from "react";
import classes from "./style.module.css";
import { useProductsContext } from "../../context/products_context";
import Skeleton from "../Skeleton";

const ProductsSidebar = () => {
  const { state, dispatch } = useProductsContext();

  return (
    <aside
      className={
        state.isProdSidebarOpen ? classes.prodSidebar : `${classes.clicked}`
      }
    >
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
              <h4><Skeleton width={100} height={30} /></h4>
              {Array(6).fill(null).map((item, index) => {
                return (
                  <button
                    className={classes.categoryBtn}
                    key={index}
                  >
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
  );
};

export default ProductsSidebar;
