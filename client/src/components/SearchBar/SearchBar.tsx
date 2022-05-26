import { FC, forwardRef } from 'react';
import useFetchEffect from '../../hooks/useFetchEffect';
import { IProducts } from '../../Interfaces/Products';
import showSearchResults from '../utils/showSearchResults';

interface ISearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSearchResultsContents: React.Dispatch<React.SetStateAction<IProducts[]>>;
  searchResultsRef: React.MutableRefObject<undefined> | undefined;
  focusedSearchResult: number;
  setFocusedSearchResult: React.Dispatch<React.SetStateAction<number>>;
  setCurrentProduct: React.Dispatch<React.SetStateAction<IProducts>>;
}

const SearchBar: FC<ISearchBarProps> = forwardRef(
  (
    {
      searchTerm,
      setSearchTerm,
      setSearchResultsContents,
      searchResultsRef,
      focusedSearchResult,
      setFocusedSearchResult,
      setCurrentProduct,
    },
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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (searchTerm) {
          const searchBarEl: HTMLUListElement | undefined =
            searchResultsRef.current;
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
      <div className="search-bar" role="search">
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
          onClick={() => searchBarRef.current.focus()}
          src="magnifying-glass.png"
          alt=""
          title="Magnifying glass"
        />
      </div>
    );
  }
);

export default SearchBar;
