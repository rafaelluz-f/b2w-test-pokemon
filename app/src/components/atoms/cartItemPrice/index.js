import React from "react";
import styled from "styled-components";

const CartItemPrice = styled.span``;

export default (props) => {
  return (
    <CartItemPrice className="cartItemPrice">{props.children}</CartItemPrice>
  );
};
