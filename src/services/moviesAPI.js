import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '3816eed11788ae9ab9f7c04c9c090fd5';

// ----trending movies
export async function fetchTrending() {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
}

// ---- search movies
const searchQuery = 'batman';
export async function fetchMoviesSearch() {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1&language=en-US&include_adult=false`
  );
  return response.data;
}

// ---- movie's details
// const movieId = 414906;
export async function fetchMovieDetails(movieID) {
  const response = await axios.get(
    `movie/${movieID}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

// // ---- movie's credits
export async function fetchMovieCredits(movieID) {
  const response = await axios.get(
    `/movie/${movieID}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
}

// // ---- movie's reviews
// export async function fetchMovieReviews(movieID) {
//   const response = await axios.get(
//     `movie/${movieID}/reviews?api_key=${API_KEY}&language=en-US`
//   );
//   return response.data;
// }
