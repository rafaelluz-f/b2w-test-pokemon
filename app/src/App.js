import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import Home from "./components/pages/home";
import useTheme from "./hooks/useTheme";
import usePokemon from "./hooks/usePokemon";

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
            box-sizing: border-box;
  }
  html{
    display:block;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    max-width: 100%;
    background: #048ca4;
    background: -moz-linear-gradient(top, #048ca4 1%, #1959e2 100%);
    background: -webkit-linear-gradient(top, #048ca4 1%, #1959e2 100%);
    background: linear-gradient(to bottom, #048ca4 1%, #1959e2 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#048ca4', endColorstr='#1959e2',GradientType=0 );
    background-position: center;
    background-size:contain;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function App() {
  const theme = useSelector((state) => state.theme);

  useTheme(process.env.REACT_APP_POKEMON_THEME);
  usePokemon();

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
