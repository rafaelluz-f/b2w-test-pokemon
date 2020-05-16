import React from "react";
import styled from "styled-components";

const CartTitle = styled.div`
  width: 100%;
  background: #202020;
  font-size: 32px;
  padding: 15px 0px;
  span {
    font-weight: 900;
    text-transform: uppercase;
    color: #fff;
  }
`;

export default (props) => {
  return (
    <CartTitle className="cartTitle">
      <span>Carrinho</span>
    </CartTitle>
  );
};
