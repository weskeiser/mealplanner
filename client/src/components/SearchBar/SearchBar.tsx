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
      <div className="search-bar">
        <input
          ref={searchBarRef}
          type="text"
          onInput={(e) => handleInput(e)}
          placeholder="Søk etter produkt.."
        />
      </div>
    );
  }
);

export default SearchBar;
