import React from "react";
import styled from "styled-components";
import CartItem from "../cartItem";

const CartItemList = styled.div`
  padding: 20px 0;
`;

export default (props) => {
  return (
    <CartItemList className="CartItemList">
      <CartItem />
      <CartItem />
      <CartItem />
    </CartItemList>
  );
};
