import React from "react";
import styled from "styled-components";
import ProductNameText from "../../atoms/productNameText";
import ProductNameTextStrong from "../../atoms/productNameTextStrong";

const ProductName = styled.div``;

export default (props) => {
  return (
    <ProductName className="productName">
      <ProductNameTextStrong>Nome</ProductNameTextStrong>
      <ProductNameText>{props.name}</ProductNameText>
    </ProductName>
  );
};
