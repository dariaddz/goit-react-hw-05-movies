import { useState, useEffect } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { MoviesFound } from '../../components/MoviesFound';
import { fetchMoviesSearch } from 'services/moviesAPI';

export default function MoviesPage() {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState(null);

  const handleFormSubmit = query => {
    setMovieName(query);
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }
    fetchMoviesSearch(movieName).then(setMovies);
  }, [movieName]);

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      {movies && <MoviesFound movies={movies} movieName={movieName} />}
    </>
  );
}
