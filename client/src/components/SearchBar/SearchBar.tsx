import { forwardRef } from 'react';

interface ISearchBarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSearchResultsContents: React.Dispatch<React.SetStateAction<IProducts[]>>;
}

const SearchBar = forwardRef(
  (
    { setSearchTerm, setSearchResultsContents }: ISearchBarProps,
    searchBarRef
  ) => {
    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;
      if (!input.value) {
        setSearchResultsContents([]);
      }
      setSearchTerm(input.value);
    };

    return (
      <div className="search-bar">
        <input
          ref={searchBarRef}
          type="text"
          onInput={(e) => handleInput(e)}
          placeholder="Søk etter produkt.."
        />
        <img src="magnifying-glass.png" alt="" />
      </div>
    );
  }
);

export default SearchBar;
