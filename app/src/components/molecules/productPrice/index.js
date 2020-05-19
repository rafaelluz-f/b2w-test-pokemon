import React from "react";
import styled from "styled-components";
import ProductPriceText from "../../atoms/productPriceText";
import ProductPriceTextStrong from "../../atoms/productPriceTextStrong";

const ProductPrice = styled.div`
  padding: 0 0 20px;
`;

export default (props) => {
  return (
    <ProductPrice className="productPrice">
      <ProductPriceText>Preço</ProductPriceText>
      <ProductPriceTextStrong>{props.price}</ProductPriceTextStrong>
    </ProductPrice>
  );
};
