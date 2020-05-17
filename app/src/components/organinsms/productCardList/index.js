import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../productCard";
import imageSample from "../../../assets/images/productImageSample.png";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomPrice } from "../../../helper/generateRandomPrice";

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
  const pokemonByType = useSelector((state) => state.pokemonByType);
  const pokemonLoading = useSelector((state) => state.pokemonLoading);
  const dispatch = useDispatch();

  const getIdPokemonThroughUrl = (url) => {
    const split = url.split("/");
    const pokemonID = split[6];

    return pokemonID;
  };
  return (
    <ProductCardList className="productCardList">
      {pokemonLoading && <p>1 carregando...</p>}
      {!pokemonLoading && (
        <>
          {pokemonByType.map((item, i) => (
            <ProductCard
              key={i}
              imageID={getIdPokemonThroughUrl(item.pokemon.url)}
              name={item.pokemon.name}
              price={generateRandomPrice()}
            />
          ))}
        </>
      )}
    </ProductCardList>
  );
};
