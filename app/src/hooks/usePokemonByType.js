import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import pokeapi from "../api/pokeapi";

export default function usePokemonByType() {
  const theme = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    const searchApi = async () => {
      try {
        const result = await pokeapi.get("/type/" + theme.pokemonTypeID);
        dispatch({
          type: "SET_POKEMON_DATA_BY_TYPE",
          payload: result.data.pokemon,
        });
        dispatch({
          type: "SET_POKEMON_LOADING",
          payload: false,
        });
      } catch (error) {}
    };

    searchApi();
  }, []);
}
