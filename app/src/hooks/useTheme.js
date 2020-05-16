import { useDispatch } from "react-redux";
import config from "../config";

export default function useTheme(pokemonTheme) {
  const dispatch = useDispatch();

  dispatch({ type: "SET_THEME", payload: config(pokemonTheme) });
}
