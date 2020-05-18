import React, { useState, useEffect } from "react";
import styled from "styled-components";
import loader from "../../../assets/images/loader.gif";
import pokemonImageNotFound from "../../../assets/images/pokemonImageNotFound.png";
import usePokemonImage from "../../../hooks/usePokemonImage";

const ProductImage = styled.div`
  text-align: center;
  margin-top: -50px;
  img {
    max-width: 100px;
  }
`;

export default (props) => {
  const [imageIsLoaded, image, imageURL] = usePokemonImage(props.imageID);

  return (
    <ProductImage className="productImage">
      {!imageIsLoaded && <img src={loader} />}
      {imageIsLoaded && <img src={image} />}
    </ProductImage>
  );
};
