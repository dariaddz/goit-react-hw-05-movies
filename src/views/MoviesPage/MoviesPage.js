import { SearchBar } from '../../components/SearchBar';
export default function MoviesPage() {
  const handleFormSubmit = query => {
    //    setMovieName(query);
    //      navigate({
    //          ...location, search: `query=${query}`
    //                            });
    console.log(query);
  };
  return <SearchBar onSubmit={handleFormSubmit} />;
}
