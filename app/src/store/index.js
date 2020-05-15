import { createStore } from 'redux';

const INITIAL_STATE = {
  data: {
    courses: ['ReactNative', 'ReactJs', 'Rafael'],
    api: [],
  },
};
function course(state = INITIAL_STATE, action) {
  console.log('running');
  console.log(state);
  switch (action.type) {
    case 'ADD_COURSE':
      return {
        ...state,
        data: { ...state.data, courses: [...state.data.courses, action.title] },
      };

    case 'ADD_API':
      return {
        ...state,
        data: {
          ...state.data,
          api: action.payload,
        },
      };

    default:
      return state;
  }
}

const store = createStore(course);

export default store;
