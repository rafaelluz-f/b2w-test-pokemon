import React from "react";
import styled from "styled-components";

const ProductPriceText = styled.span`
  display: block;
  text-align: center;
  font-size: 24px;
`;
export default (props) => {
  return (
    <ProductPriceText className="productPriceText">
      {props.children}
    </ProductPriceText>
  );
};
