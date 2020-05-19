import React from "react";
import styled from "styled-components";

const ProductPriceTextStrong = styled.span`
  display: block;
  font-size: 26px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
`;
export default (props) => {
  return (
    <ProductPriceTextStrong className="productPriceTextStrong">
      {props.children}
    </ProductPriceTextStrong>
  );
};
