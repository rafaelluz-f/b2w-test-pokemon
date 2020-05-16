import React from "react";
import styled from "styled-components";

const CartButton = styled.div`
  background: #a22525;
  color: #fff;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 32px;
  padding: 25px 20px;
  cursor: pointer;
`;

export default (props) => {
  return (
    <CartButton className="cartButton">
      <span>FINALIZAR</span>
    </CartButton>
  );
};
