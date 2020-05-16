import React from "react";
import styled from "styled-components";
import CartTitle from "../../molecules/cartTitle";
import CartItem from "../../molecules/cartItem";
import CartButton from "../../molecules/cartButton";
import CartTotal from "../../molecules/cartTotal";

const Cart = styled.div`
  background: #fff;
  text-align: center;
  margin-top: 30px;
  width: 100%;
  margin: 0px 15px;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export default (props) => {
  return (
    <Cart className="cart">
      <CartTitle />
      <CartItem />
      <CartTotal />
      <CartButton />
    </Cart>
  );
};
