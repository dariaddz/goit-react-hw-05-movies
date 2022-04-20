import { SearchBar } from '../../components/SearchBar';

export function MoviesPage() {
  // const [movieName, setMovieName] = useState('');
  // const [movies, setMovies] = useState(null);

  const handleFormSubmit = query => {
    //   setMovieName(query);
    //   //      navigate({
    //   //          ...location, search: `query=${query}`
    //   //                            });
    console.log(query);
  };
  return <SearchBar onSubmit={handleFormSubmit} />;
}
