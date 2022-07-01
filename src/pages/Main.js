import React from "react";
import { Category } from "./components/Menu";
import { Navbar } from "./components/Category";
import { MainSlider } from "./components/MainSlider";
import { Login } from "./Login";
import { MainProducts } from "./components/MainProducts";
import { useDispatch, useSelector } from "react-redux";
import { FilterCategory } from "../redux_toolkit/slices/filter_slice";
import { setProductId } from "../redux_toolkit/slices/test_slice";

export const Main = () => {
  const { categoryId } = useSelector(({ filter }) => filter);

  const dispatch = useDispatch();

  const onClickCategory = React.useCallback((id) => {
    dispatch(FilterCategory(id));
  }, []);

  return (
    <div className="content">
      <div className="container">
        <div className="container__inner">
          <Navbar />
          <div className="container__middle">
            <div className="">
              <Category
                onClickCategory={onClickCategory}
                categoryId={categoryId}
              />
              <MainSlider />
              <div className="container__banner">
                <img
                  className="contauner__banner-img"
                  src="images/hh.png"
                  alt="banner"
                />
              </div>
            </div>
            <Login />
          </div>
        </div>
        <div className="content__banner"></div>
        <div>
          <MainProducts />
        </div>
      </div>
    </div>
  );
};
