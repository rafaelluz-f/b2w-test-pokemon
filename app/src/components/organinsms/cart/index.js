import React from "react";
import styled from "styled-components";
import CartTitle from "../../molecules/cartTitle";
import CartButton from "../../molecules/cartButton";
import CartTotal from "../../molecules/cartTotal";
import CartItemList from "../../organinsms/cartItemList";
import CartFields from "../../molecules/cartCardFields";

const Cart = styled.div`
  background: #fff;
  text-align: center;
  margin-top: 30px;
  width: 100%;
  margin: 0px 7px;

  @media (min-width: 992px) {
    width: 25%;
  }
`;

export default (props) => {
  return (
    <Cart id="cart" className="cart">
      <CartTitle />
      <CartItemList />
      <CartFields />
      <CartTotal />
      <CartButton />
    </Cart>
  );
};
