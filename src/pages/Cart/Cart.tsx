import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import { selectCart } from "../../redux/cart/selectors";
import CartEmpty from "../../components/CartEmpty/CartEmpty";
import { CartTop } from "../../components/CartTop";

const Cart = () => {
  const goBack = useNavigate();
  const { totalPrice, items } = useSelector(selectCart);
  const totalCount = items.reduce((acc, item) => (acc += item.count), 0);

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className="container container--cart">
      <div className="cart">
        <CartTop />
        <div className="content__items">
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              {" "}
              Всего пицц: <b>{totalCount} шт.</b>{" "}
            </span>
            <span>
              {" "}
              Сумма заказа: <b>{totalPrice} ₽</b>{" "}
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="#"
              onClick={() => goBack(-1)}
              className="button button--outline button--add go-back-btn"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Вернуться назад</span>
            </Link>
            <button className="button pay-btn">
              <span>Оплатить сейчас</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
