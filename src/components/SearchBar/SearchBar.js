import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './SearchBar.module.css';

export function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return alert('Введите название фильма');
    }
    onSubmit(query);
    setQuery('');
  };

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  return (
    <main>
      <form className={s.searchForm} onSubmit={onFormSubmit}>
        <input
          className={s.input}
          type="text"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="enter movie name"
        ></input>
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </main>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
