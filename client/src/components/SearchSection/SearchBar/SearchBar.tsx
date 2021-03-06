import {
  Dispatch,
  FormEvent,
  forwardRef,
  ForwardRefExoticComponent,
  KeyboardEvent,
  MutableRefObject,
  RefAttributes,
  SetStateAction,
} from 'react';
import useDebounceFetch from '../../../hooks/useDebounceFetch';
import { IProducts } from '../../../Interfaces/Products';
import showSearchResults from '../../helpers/showSearchResults';
import * as Styled from './SearchBar.styled';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setSearchResultsContents: Dispatch<SetStateAction<IProducts[]>>;
  focusedSearchResult: number;
  setFocusedSearchResult: Dispatch<SetStateAction<number>>;
  setSelectedProductOriginalServing: Dispatch<SetStateAction<IProducts>>;
  searchResultsRef: MutableRefObject<HTMLUListElement | undefined>;
}

const SearchBar: ForwardRefExoticComponent<
  SearchBarProps & RefAttributes<HTMLInputElement | undefined>
> = forwardRef<HTMLInputElement | undefined, SearchBarProps>(
  (
    {
      searchTerm,
      setSearchTerm,
      setSearchResultsContents,
      searchResultsRef,
      focusedSearchResult,
      setFocusedSearchResult,
      setSelectedProductOriginalServing,
    },
    searchBarRef
  ) => {
    useDebounceFetch(
      'nutrients.json',
      showSearchResults(setSearchResultsContents, searchTerm),
      [searchTerm],
      300
    );

    const handleInput = (e: FormEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;
      if (!input.value) {
        setSearchResultsContents([]);
      }
      setSearchTerm(input.value);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      const searchResultsEl = searchResultsRef.current as HTMLUListElement;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (searchTerm) {
          const firstSearchResult =
            searchResultsEl.children[focusedSearchResult + 0];

          firstSearchResult.focus();
          setFocusedSearchResult(
            (focusedSearchResult) => focusedSearchResult + 0
          );
        }
      }

      if (e.key === 'Escape') {
        setSelectedProductOriginalServing({});
        searchBarRef.current.value = '';
        setSearchTerm('');
        setFocusedSearchResult(0);

        if (!searchTerm) {
          searchBarRef.current.blur();
        }
      }
    };

    return (
      <>
        <Styled.SearchBar>
          <input
            ref={searchBarRef}
            type="text"
            onInput={(e) => handleInput(e)}
            onKeyDown={(e) => handleKeyDown(e)}
            placeholder="S??k etter produkt.."
            title="search bar"
          />
          <img
            onClick={() => searchBarRef.current.focus()}
            src="magnifying-glass.png"
            alt=""
            title="Magnifying glass"
          />
        </Styled.SearchBar>
      </>
    );
  }
);

export default SearchBar;
