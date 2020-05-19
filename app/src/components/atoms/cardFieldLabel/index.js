import React from "react";
import styled from "styled-components";

const CartFieldLabel = styled.label`
  font-size: 11px;
  text-transform: uppercase;
`;
export default (props) => {
  return (
    <CartFieldLabel className="cartFieldLabel">{props.children}</CartFieldLabel>
  );
};
