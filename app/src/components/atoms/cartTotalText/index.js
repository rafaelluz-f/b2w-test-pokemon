import React from "react";
import styled from "styled-components";

const CartTotalText = styled.span`
  float: left;
`;
export default (props) => {
  return (
    <CartTotalText className="cartTotalText">{props.children}</CartTotalText>
  );
};
