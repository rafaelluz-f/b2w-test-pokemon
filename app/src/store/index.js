import { createStore } from "redux";

const INITIAL_STATE = {
  theme: {},
  pokemon: [],
};
function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    case "SET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
      };

    default:
      return state;
  }
}

const store = createStore(
  course,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
