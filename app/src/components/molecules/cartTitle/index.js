import React from "react";
import styled from "styled-components";
import CartTitleText from "../../atoms/cartTitleText";

const CartTitle = styled.div`
  width: 100%;
  background: #202020;
  font-size: 32px;
  padding: 15px 0px;
`;

export default (props) => {
  return (
    <CartTitle className="cartTitle">
      <CartTitleText>Carrinho</CartTitleText>
    </CartTitle>
  );
};
