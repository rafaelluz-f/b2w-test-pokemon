import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Home() {
  const reduxPokemonTheme = useSelector((state) => state);

  useEffect(() => {
    console.log(reduxPokemonTheme);
  }, [reduxPokemonTheme]);

  return <div>{reduxPokemonTheme ? reduxPokemonTheme.background : null}</div>;
}

export default Home;
