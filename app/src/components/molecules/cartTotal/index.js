import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CartTotal = styled.div`
  overflow: hidden;
  background: #626262;
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  font-size: 19px;
  padding: 25px 20px;
  .total {
    float: left;
  }
  .total-price {
    float: right;
  }
`;

export default (props) => {
  const cartProducts = useSelector((state) => state.cartProducts);

  const totalPrice = () => {
    let result = 0;
    cartProducts.map((item) => {
      let itemPrice = item.price.replace(/[^0-9\,]/g, "");
      itemPrice = itemPrice.replace(",", ".");
      itemPrice = parseFloat(itemPrice);

      result = itemPrice + result;
    });

    return result.toFixed(2).toString().replace(".", ",");
  };

  useEffect(() => {
    totalPrice();
  }, [cartProducts]);
  return (
    <CartTotal className="cartTotal">
      <span className="total">Total:</span>
      <span className="total-price">R${totalPrice()}</span>
    </CartTotal>
  );
};
