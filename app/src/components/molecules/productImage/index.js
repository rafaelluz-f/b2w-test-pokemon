import React, { useState, useEffect } from "react";
import styled from "styled-components";
import loader from "../../../assets/images/loader.gif";
import pokemonImageNotFound from "../../../assets/images/pokemonImageNotFound.png";

const ProductImage = styled.div`
  text-align: center;
  margin-top: -50px;
  img {
    max-width: 100px;
  }
`;

export default (props) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const [image, setImage] = useState(null);
  const imageURL = `https://pokeres.bastionbot.org/images/pokemon/${props.imageID}.png`;

  function isImage(src) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.onload = () => resolve(img.src);
      img.onerror = () => reject();
      img.src = src;
    });
  }

  const isImageLoaded = async (imageURL) => {
    try {
      const result = await isImage(imageURL);
      setImage(result);
      setImageIsLoaded(true);
    } catch (error) {
      setImage(pokemonImageNotFound);
      setImageIsLoaded(true);
    }
  };

  useEffect(() => {
    isImageLoaded(imageURL);
  }, [imageURL]);

  return (
    <ProductImage className="productImage">
      {!imageIsLoaded && <img src={loader} />}
      {imageIsLoaded && <img src={image} />}
    </ProductImage>
  );
};
