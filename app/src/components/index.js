import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import usePokemon from '../hooks/usePokemon';
import config from '../config';

export default function CourseList() {
  const reduxCourses = useSelector((state) => state.data.courses);
  const reduxApi = useSelector((state) => state.api);
  const dispatch = useDispatch();
  const appConfig = config(process.env.REACT_APP_POKEMON_TYPE);
  const [pokemon, error] = usePokemon(appConfig.pokemonTypeID);

  // useEffect(() => {
  //   if (error) dispatch({ type: 'ADD_COURSE', title: error });
  // }, [error]);

  useEffect(() => {
    console.log(pokemon);
    dispatch({ type: 'ADD_API', payload: pokemon });
    console.log(reduxCourses);
  }, [pokemon]);

  function addCourse() {
    dispatch({ type: 'ADD_COURSE', title: 'Graphql' });
  }
  return (
    <>
      <ul>
        {reduxCourses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button type="button" onClick={addCourse}>
        adicionar curso
      </button>
    </>
  );
}
