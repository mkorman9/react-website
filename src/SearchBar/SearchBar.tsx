import { FormEvent } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSearch}>
      <input 
        id="search"
        type="text"
        placeholder="Search..."
        className="search-bar" 
      />
    </form>
  );
};

export default SearchBar;
