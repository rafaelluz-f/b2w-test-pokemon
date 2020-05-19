import React from "react";
import styled from "styled-components";

const ProductNameTextStrong = styled.span`
  display: block;
  text-align: center;
  font-size: 24px;
  text-transform: capitalize;
`;
export default (props) => {
  return (
    <ProductNameTextStrong className="productNameTextStrong">
      {props.children}
    </ProductNameTextStrong>
  );
};
