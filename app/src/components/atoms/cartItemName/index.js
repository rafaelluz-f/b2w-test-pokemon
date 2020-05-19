import React from "react";
import styled from "styled-components";

const CartItemName = styled.span``;

export default (props) => {
  return <CartItemName className="cartItemName">{props.children}</CartItemName>;
};
