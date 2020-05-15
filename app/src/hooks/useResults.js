import { useEffect, useState } from 'react';
import pokeapi from '../api/pokeapi';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await pokeapi.get('/search', {
        params: {
          limit: 50,
          searchTerm,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage('Something went wrong');
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('startando aplicação');
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
