import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const SearchBar = styled.div`
  text-align: center;
  padding: 15px;

  input {
    border: 2px solid #bebebe;
    width: 100%;
    border-radius: 10px;
    padding: 20px;
  }
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
      <input
        onChange={handleChange}
        type="text"
        placeholder="Procurar Pokemon..."
      />
    </SearchBar>
  );
};
