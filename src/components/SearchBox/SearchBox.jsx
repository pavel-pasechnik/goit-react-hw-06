import { useId } from 'react';
import { IoIosSearch } from 'react-icons/io';
import css from './SearchBox.module.css';

export default function SearchBox({ inputValue, onChange }) {
  const searchBarId = useId();

  return (
    <div className={css.find}>
      <label htmlFor={searchBarId}>Find contact by name</label>
      <input
        className={css.searchBar}
        type='text'
        name='searchBar'
        id={searchBarId}
        value={inputValue}
        onChange={onChange}
      />
      <IoIosSearch className={css.search} />
    </div>
  );
}
