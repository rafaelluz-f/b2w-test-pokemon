import React from "react";
import styled from "styled-components";

const CartButtonEnabled = styled.button`
  background: green;
  color: #fff;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 32px;
  padding: 25px 20px;
  width: 100%;
  border: none;
  cursor: pointer;
`;
export default (props) => {
  return (
    <CartButtonEnabled className="cartButtonEnabled" onClick={props.function}>
      {props.children}
    </CartButtonEnabled>
  );
};
