import React from "react";
import styled from "styled-components";
import imageSample from "../../../assets/images/productImageSample.png";

const ProductImage = styled.div`
  text-align: center;
  margin-top: -50px;
`;

export default (props) => {
  return (
    <ProductImage className="productImage">
      <img src={props.image} />
    </ProductImage>
  );
};
