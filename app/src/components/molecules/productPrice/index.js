import React from "react";
import styled from "styled-components";

const ProductPrice = styled.div`
  padding: 0 0 20px;

  span {
    display: block;
    text-align: center;
    font-size: 24px;
  }

  .strongPrice {
    font-size: 26px;
    font-weight: 900;
    text-transform: uppercase;
  }
`;

export default (props) => {
  return (
    <ProductPrice className="productPrice">
      <span className="strongPrice">Preço</span>
      <span>{props.price}</span>
    </ProductPrice>
  );
};
