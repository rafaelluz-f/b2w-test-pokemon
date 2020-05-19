import React from "react";
import styled from "styled-components";
import usePokemonImage from "../../../hooks/usePokemonImage";
import ProductImageLoaded from "../../atoms/productImageLoaded";
import Loader from "../../atoms/loader";

const ProductImage = styled.div`
  text-align: center;
  margin-top: -50px;
  img {
    max-width: 100px;
  }
`;

export default (props) => {
  const [imageIsLoaded, image] = usePokemonImage(props.imageID);

  return (
    <ProductImage className="productImage">
      {!imageIsLoaded && <Loader />}
      {imageIsLoaded && <ProductImageLoaded alt="Pokemon" src={image} />}
    </ProductImage>
  );
};
