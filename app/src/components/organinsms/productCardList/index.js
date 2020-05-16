import React from "react";
import styled from "styled-components";
import ProductCard from "../productCard";
import imageSample from "../../../assets/images/productImageSample.png";

const ProductCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 992px) {
    width: 70%;
  }
`;

export default (props) => {
  return (
    <ProductCardList className="productCardList">
      <ProductCard name="Rafael" price="R$89,90" image={imageSample} />
      <ProductCard name="Rafael" price="R$89,90" image={imageSample} />
      <ProductCard name="Rafael" price="R$89,90" image={imageSample} />
      <ProductCard name="Rafael" price="R$89,90" image={imageSample} />
      <ProductCard name="Rafael" price="R$89,90" image={imageSample} />
      <ProductCard name="Rafael" price="R$89,90" image={imageSample} />
    </ProductCardList>
  );
};
