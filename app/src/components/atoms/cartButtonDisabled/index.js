import React from "react";
import styled from "styled-components";

const CartButtonDisabled = styled.button`
  color: #fff;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 32px;
  padding: 25px 20px;
  width: 100%;
  border: none;
  background: #a22525;
  cursor: default;
`;
export default (props) => {
  return (
    <CartButtonDisabled
      className="CartButtonDisabled disabled"
      onClick={props.function}
    >
      {props.children}
    </CartButtonDisabled>
  );
};
