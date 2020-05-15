import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import useWindowDimensions from './hooks/helper/useWindowDimensions';
import usePokemon from './hooks/usePokemon';
import CourseList from './components';
import config from './config';
import Home from './components/pages/home';

function App() {
  const appConfig = config(process.env.REACT_APP_POKEMON_TYPE);
  // const appConfig2 = config(process.env);
  // const { height, width } = useWindowDimensions();
  // const [pokemon, error] = usePokemon(appConfig.pokemonTypeID);

  console.log(appConfig);

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
