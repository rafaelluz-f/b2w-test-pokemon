import { useEffect, useState } from "react";
import pokemonImageNotFound from "../assets/images/pokemonImageNotFound.png";

export default function usePokemonByType(imageID) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const [image, setImage] = useState(null);
  const imageURL = `https://pokeres.bastionbot.org/images/pokemon/${imageID}.png`;

  function isImage(src) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.onload = () => resolve(img.src);
      img.onerror = () => reject();
      img.src = src;
    });
  }

  useEffect(() => {
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
    isImageLoaded(imageURL);
  }, [imageURL]);

  return [imageIsLoaded, image, imageURL];
}
