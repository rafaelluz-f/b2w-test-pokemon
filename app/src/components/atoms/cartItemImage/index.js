import React from "react";
import styled from "styled-components";

const CartItemImage = styled.img`
  border: 1px solid #000;
  min-width: 50px;
  max-width: 50px;
  height: 50px;
  flex: 0;
`;
export default (props) => {
  return (
    <CartItemImage className="cartItemImage" alt={props.alt} src={props.src} />
  );
};
