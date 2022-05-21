import { forwardRef } from 'react';

interface ISearchBarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSearchDropdownContents: React.Dispatch<React.SetStateAction<IProducts[]>>;
}

const SearchBar = forwardRef(
  (
    { setSearchTerm, setSearchDropdownContents }: ISearchBarProps,
    searchBarRef
  ) => {
    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;
      if (!input.value) {
        setSearchDropdownContents([]);
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
      </div>
    );
  }
);

export default SearchBar;
