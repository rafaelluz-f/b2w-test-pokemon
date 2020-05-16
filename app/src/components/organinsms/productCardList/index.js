import React from "react";
import styled from "styled-components";
import ProductCard from "../productCard";
import imageSample from "../../../assets/images/productImageSample.png";

const ListCardProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;

  @media (min-width: 768px) {
    width: 70%;
  }
`;

export default (props) => {
  return (
    <ListCardProduct className="listCardProduct">
      <ProductCard name="Rafael" price="R$89,90" image={imageSample} />
      <ProductCard name="Rafael" price="R$89,90" image={imageSample} />
      <ProductCard name="Rafael" price="R$89,90" image={imageSample} />
      <ProductCard name="Rafael" price="R$89,90" image={imageSample} />
      <ProductCard name="Rafael" price="R$89,90" image={imageSample} />
      <ProductCard name="Rafael" price="R$89,90" image={imageSample} />
    </ListCardProduct>
  );
};
