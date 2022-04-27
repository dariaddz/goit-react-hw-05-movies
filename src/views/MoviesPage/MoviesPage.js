import { useState, useEffect } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { MoviesFound } from '../../components/MoviesFound';
import { fetchMoviesSearch } from 'services/moviesAPI';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');

  const handleFormSubmit = query => {
    setMovieName(query);
    setSearchParams({ searchQuery: query });
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }
    fetchMoviesSearch(movieName).then(setMovies);
  }, [movieName]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    fetchMoviesSearch(searchQuery).then(setMovies);
  }, [searchQuery]);

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      {movies && <MoviesFound movies={movies} movieName={movieName} />}
    </>
  );
}
