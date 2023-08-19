import { FormEvent } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSearch}>
      <input id="search" type="text" className="search-bar" />
    </form>
  );
};

export default SearchBar;
