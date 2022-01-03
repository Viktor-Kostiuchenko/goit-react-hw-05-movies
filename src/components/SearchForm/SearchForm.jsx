import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { BiSearchAlt } from 'react-icons/bi';
import s from './SearchForm.module.scss';

export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleNameChange = evt => {
    setQuery(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      toast.warning('Enter sth');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.searchForm} autoComplete="off">
        <input
          className={s.input}
          type="text"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleNameChange}
        />
        <button type="submit" className={s.button}>
          <BiSearchAlt className={s.searchIcon} />
        </button>
      </form>
    </>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
