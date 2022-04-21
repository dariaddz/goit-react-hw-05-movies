import { useState, useEffect } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { MoviesFound } from '../../components/MoviesFound';
import { fetchMoviesSearch } from 'services/moviesAPI';

export function MoviesPage() {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState(null);

  const handleFormSubmit = query => {
    setMovieName(query);
    //   //      navigate({
    //   //          ...location, search: `query=${query}`
    //   //                            });
    console.log(query);
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }
    fetchMoviesSearch(movieName).then(setMovies);
  }, [movieName]);

  console.log(movies);
  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      {movies && <MoviesFound movies={movies} movieName={movieName} />}
    </>
  );
}

// <>
//   {!movies && <SearchBar onSubmit={handleFormSubmit} />}
//   {movies && <MoviesFound movies={movies} />}
// </>;
