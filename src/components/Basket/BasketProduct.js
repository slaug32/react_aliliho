import React from "react";
import { useDispatch } from "react-redux";
import { setProductElecteds } from "../../redux_toolkit/slices/account_slice";
import {
  minusItem,
  removeItem,
  setProductBasket,
} from "../../redux_toolkit/slices/basket_slice";
import { setOrderProduct } from "../../redux_toolkit/slices/order_slice";
import { Preloader } from "../Preloader";
import { MyButton } from "./../../UI/MyButton";

export const BasketProduct = ({
  id,
  name,
  image,
  price,
  count,
  description,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(setProductBasket({ id }));
  };

  const deleteItem = () => {
    if (window.confirm("Вы действительно хотите удалить этот товар?")) {
      dispatch(removeItem(id));
    }
  };

  const onClickMinus = () => {
    if (count == 1) {
      return deleteItem();
    } else {
      dispatch(minusItem({ id }));
    }
  };

  const onClickOrder = () => {
    let obj = { id, name, image, price, count };
    dispatch(setOrderProduct(obj));
  };

  const onClickElected = () => {
    let obj = { id, name, image, price, description };
    dispatch(setProductElecteds(obj));
  };

  return (
    <div className="basket-product">
      <div>
        <img className="product__img" src={image} />
      </div>
      <div className="basket-product__list">
        <div className="basket-product__name">{name}</div>
        <h2 className="basket-product__price">Цена: {price}руб.</h2>
        <h4 className="basket-product__procent">56%</h4>
      </div>
      <div className="basket-product__count">
        {!count ? (
          <Preloader />
        ) : (
          <>
            <img
              className="basket_product__svg"
              onClick={onClickElected}
              src="https://img.icons8.com/material/24/000000/like--v1.png"
            />
            <img
              className="basket_product__svg"
              onClick={deleteItem}
              src="https://img.icons8.com/material/24/000000/trash--v1.png"
            />
            <img
              className="basket_product__svg"
              onClick={onClickMinus}
              src="https://img.icons8.com/material-outlined/24/000000/minus-sign.png"
            />
            <h3>{count}</h3>
            <img
              className="basket_product__svg"
              onClick={onClickPlus}
              src="https://img.icons8.com/material-outlined/24/000000/plus--v1.png"
            />
          </>
        )}
      </div>
      <MyButton onClick={onClickOrder} className="btn">
        Заказать
      </MyButton>
    </div>
  );
};
