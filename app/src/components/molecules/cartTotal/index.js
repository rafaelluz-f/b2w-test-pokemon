import React from "react";
import styled from "styled-components";

const CartTotal = styled.div`
  overflow: hidden;
  background: #626262;
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  font-size: 19px;
  padding: 25px 20px;
  .total {
    float: left;
  }
  .total-price {
    float: right;
  }
`;

export default (props) => {
  return (
    <CartTotal className="cartTotal">
      <span className="total">Total:</span>
      <span className="total-price">R$88,90</span>
    </CartTotal>
  );
};
