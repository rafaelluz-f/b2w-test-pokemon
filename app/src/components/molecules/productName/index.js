import React from "react";
import styled from "styled-components";

const ProductName = styled.div`
  span {
    display: block;
    text-align: center;
    font-size: 24px;
    text-transform: capitalize;
  }

  .strongName {
    font-size: 26px;
    font-weight: 900;
    text-transform: uppercase;
  }
`;

export default (props) => {
  return (
    <ProductName className="productName">
      <span className="strongName">Nome</span>
      <span>{props.name}</span>
    </ProductName>
  );
};
