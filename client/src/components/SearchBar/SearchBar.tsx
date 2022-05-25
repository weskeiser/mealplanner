import { forwardRef } from 'react';
import useFetchEffect from '../../hooks/useFetchEffect';
import showSearchResults from '../utils/showSearchResults';

interface ISearchBarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSearchResultsContents: React.Dispatch<React.SetStateAction<IProducts[]>>;
}

const SearchBar = forwardRef(
  (
    {
      searchTerm,
      setSearchTerm,
      setSearchResultsContents,
      searchResultsRef,
      focusedSearchResult,
      setFocusedSearchResult,
      setCurrentProduct,
    }: ISearchBarProps,
    searchBarRef
  ) => {
    useFetchEffect(
      'products.json',
      showSearchResults(setSearchResultsContents, searchTerm),
      [searchTerm],
      300
    );

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
        if (searchTerm) {
          const searchBarEl = searchResultsRef.current;
          const firstSearchResult =
            searchBarEl.children[focusedSearchResult + 0];

          firstSearchResult.focus();
          setFocusedSearchResult(
            (focusedSearchResult) => focusedSearchResult + 0
          );
        }
      }

      if (e.key === 'Escape') {
        setCurrentProduct({});
        searchBarRef.current.value = '';
        setSearchTerm('');
        setFocusedSearchResult(0);

        if (!searchTerm) {
          searchBarRef.current.blur();
        }
      }
    };

    return (
      <div className="search-bar">
        <input
          className="search-bar__input"
          ref={searchBarRef}
          type="text"
          // onClick={setFocusedSearchResult(0)}
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
