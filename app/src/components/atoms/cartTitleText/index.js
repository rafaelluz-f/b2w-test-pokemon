import React from "react";
import styled from "styled-components";

const CartText = styled.span`
  font-weight: 900;
  text-transform: uppercase;
  color: #fff;
`;
export default (props) => {
  return <CartText className="cartText">{props.children}</CartText>;
};
