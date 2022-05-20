import { forwardRef } from 'react';

interface ISearchBarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = forwardRef(
  ({ setSearchTerm }: ISearchBarProps, searchBarRef) => {
    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };

    return (
      <input
        ref={searchBarRef}
        className="search-bar"
        type="text"
        onInput={(e) => handleInput(e)}
        placeholder="Søk etter produkt.."
      />
    );
  }
);

export default SearchBar;
