import { useState, useEffect } from 'react';
import pokeapi from '../api/pokeapi';
import config from '../config';

export default function usePokemon(pokemonTypeID) {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const searchApi = async (pokemonTypeID) => {
      try {
        const result = await pokeapi.get('/type/' + pokemonTypeID);
        //console.log(result);
        setPokemon(result.data.pokemon);
      } catch (error) {
        // console.log(error);
        setError('Something went wrong');
      }
    };

    const appConfig = config(process.env.REACT_APP_POKEMON_TYPE);
    searchApi(appConfig.pokemonTypeID);
  }, []);

  return [pokemon, error];
}
