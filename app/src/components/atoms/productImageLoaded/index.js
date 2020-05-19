import React from "react";
import styled from "styled-components";

const ProductImageLoaded = styled.img`
  max-width: 100px;
`;
export default (props) => {
  return (
    <ProductImageLoaded
      className="productImageLoaded"
      alt={props.alt}
      src={props.src}
    />
  );
};
