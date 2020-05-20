import React from "react";
import styled from "styled-components";

const CartFixedMessage = styled.p`
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-size: 13px;
`;

export default (props) => {
  return (
    <CartFixedMessage className="cartFixedMessage">
      {props.children}
    </CartFixedMessage>
  );
};
