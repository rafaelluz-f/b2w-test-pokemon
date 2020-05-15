import axios from 'axios';

export default axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});
