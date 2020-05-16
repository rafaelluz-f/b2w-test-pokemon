import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/pages/home";
import useTheme from "./hooks/useTheme";
import usePokemon from "./hooks/usePokemon";
function App() {
  const theme = useSelector((state) => state.theme);

  useTheme(process.env.REACT_APP_POKEMON_THEME);
  usePokemon();

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
