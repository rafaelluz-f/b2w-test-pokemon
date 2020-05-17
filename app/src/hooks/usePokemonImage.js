import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function usePokemon(pokemonTypeID) {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const searchApi = async (pokemonTypeID) => {
      try {
        const result = await pokeapi.get("/type/" + theme.pokemonTypeID);
        dispatch({ type: "SET_POKEMON", payload: result.data.pokemon });
      } catch (error) {}
    };

    searchApi(pokemonTypeID);
  }, []);
}
