import axios from 'axios';
import { toast } from 'react-toastify';

const getMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 1000,

  params: {
    api_key: '0c445e222255734e4e402081285b3802',
  },
});

export async function fetchMovies(q) {
  try {
    const { data } = await getMovies(q);
    return data;
  } catch (error) {
    toast.error(`Нет фильмов по запросу`);
  }
}
