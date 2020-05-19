import React from "react";
import styled from "styled-components";

const ProductNameText = styled.span`
  font-size: 26px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  display: block;
`;
export default (props) => {
  return (
    <ProductNameText className="productNameText">
      {props.children}
    </ProductNameText>
  );
};
