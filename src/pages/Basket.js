import React from "react";

export const Basket = () => {
  return (
    <div className="basket">
      <div className="basket__inner">
        <div className="basket__empty">
          <img className="basket__empty__img" src="images/basket_img.jpg" />
          <h2>Ваша корзина пуста</h2>
          <h4>Добавьте хотябы один товар, чтобы сделать заказ!</h4>
        </div>
      </div>
    </div>
  );
};