import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CartTotalText from "../../atoms/cartTotalText";
import CartTotalPriceText from "../../atoms/cartTotalPriceText";

const CartTotal = styled.div`
  overflow: hidden;
  background: #626262;
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  font-size: 19px;
  padding: 25px 20px;
  .total-price {
    float: right;
  }
`;

export default (props) => {
  const cartProducts = useSelector((state) => state.cartProducts);
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    const totalPrice = () => {
      let result = 0;
      cartProducts.map((item) => {
        let itemPrice = item.price.replace(/[^0-9,]/g, "");
        itemPrice = itemPrice.replace(",", ".");
        itemPrice = parseFloat(itemPrice);

        return (result = itemPrice + result);
      });

      setTotalPrice(result.toFixed(2).toString().replace(".", ","));
    };
    totalPrice();
  }, [cartProducts, totalPrice]);
  return (
    <CartTotal className="cartTotal">
      <CartTotalText>Total:</CartTotalText>
      <CartTotalPriceText>R${totalPrice}</CartTotalPriceText>
    </CartTotal>
  );
};
