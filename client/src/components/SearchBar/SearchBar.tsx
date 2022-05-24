import { forwardRef, useState } from 'react';

interface ISearchBarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSearchResultsContents: React.Dispatch<React.SetStateAction<IProducts[]>>;
}

const SearchBar = forwardRef(
  (
    {
      setSearchTerm,
      setSearchResultsContents,
      searchResultsRef,
      focusedSearchResult,
      setFocusedSearchResult,
    }: ISearchBarProps,
    searchBarRef
  ) => {
    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;
      if (!input.value) {
        setSearchResultsContents([]);
      }
      setSearchTerm(input.value);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const searchBarEl = searchResultsRef.current;
        searchResultsRef.current.children[focusedSearchResult].focus();

        console.log(focusedSearchResult);
        setFocusedSearchResult((focusedSearchResult) => {
          // if (focusedSearchResult >= searchBarEl.children.length - 1) {
          //   return 0;
          // } else {
          //   return focusedSearchResult + 1;
          // }
          return focusedSearchResult + 1;
        });
      }
    };

    return (
      <div className="search-bar">
        <input
          className="search-bar__input"
          ref={searchBarRef}
          type="text"
          onInput={(e) => handleInput(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          placeholder="Søk etter produkt.."
        />
        <img
          onClick={(e) => searchBarRef.current.focus()}
          src="magnifying-glass.png"
          alt=""
        />
      </div>
    );
  }
);

export default SearchBar;
