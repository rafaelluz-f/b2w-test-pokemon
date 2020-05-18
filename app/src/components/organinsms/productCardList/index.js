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

  > p {
    color: #fff;
    text-align: center;
  }

  @media (min-width: 992px) {
    width: 70%;
  }
`;

export default (props) => {
  const pokemonFilteredBySearch = useSelector(
    (state) => state.pokemonFilteredBySearch
  );
  const pokemonLoading = useSelector((state) => state.pokemonLoading);
  const errorAppMessage = useSelector((state) => state.errorAppMessage);
  const errorApp = useSelector((state) => state.errorApp);
  const dispatch = useDispatch();

  const getIdPokemonThroughUrl = (url) => {
    const split = url.split("/");
    const pokemonID = split[6];

    return pokemonID;
  };
  return (
    <ProductCardList className="productCardList">
      {pokemonLoading && <p>carregando...</p>}
      {errorApp && <p>{errorAppMessage}</p>}
      {!pokemonLoading && (
        <>
          {pokemonFilteredBySearch.map((item, i) => (
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
