import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import SearchBarInput from "../../atoms/searchBarInput";

const SearchBar = styled.div`
  text-align: center;
  padding: 15px;
`;

export default (props) => {
  const dispatch = useDispatch();
  const pokemonByType = useSelector((state) => state.pokemonByType);
  const [filterPokemon, setfilterPokemon] = useState("");

  const handleChange = (event) => {
    setfilterPokemon(event.target.value);
  };

  const filteringPokemon = pokemonByType.filter((pokemon) =>
    pokemon.pokemon.name.toLowerCase().includes(filterPokemon.toLowerCase())
  );

  useEffect(() => {
    dispatch({
      type: "SET_POKEMON_FILTERED_BY_SEARCH",
      payload: pokemonByType,
    });
  }, [pokemonByType, dispatch]);

  useEffect(() => {
    if (!filterPokemon) {
      dispatch({
        type: "SET_POKEMON_FILTERED_BY_SEARCH",
        payload: pokemonByType,
      });
    }
    dispatch({
      type: "SET_POKEMON_FILTERED_BY_SEARCH",
      payload: filteringPokemon,
    });
  }, [filterPokemon, dispatch, filteringPokemon, pokemonByType]);

  return (
    <SearchBar className="searchBar">
      <SearchBarInput function={handleChange} />
    </SearchBar>
  );
};
