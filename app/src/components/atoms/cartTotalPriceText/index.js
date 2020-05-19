import React from "react";
import styled from "styled-components";

const CartTotalPriceText = styled.span`
  float: right;
`;
export default (props) => {
  return (
    <CartTotalPriceText className="cartTotalPriceText">
      {props.children}
    </CartTotalPriceText>
  );
};
