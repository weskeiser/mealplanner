import { FC, MutableRefObject, Dispatch, SetStateAction } from 'react';
import useFetchEffect from '../../hooks/useFetchEffect';
import { IProducts } from '../../Interfaces/Products';
import showSearchResults from '../utils/showSearchResults';
import InputWithRef from './InputWithRef';

interface ISearchBarProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setSearchResultsContents: Dispatch<SetStateAction<IProducts[]>>;
  focusedSearchResult: number;
  setFocusedSearchResult: Dispatch<SetStateAction<number>>;
  setCurrentProduct: Dispatch<SetStateAction<IProducts>>;
  searchResultsRef: MutableRefObject<HTMLUListElement | undefined>;
  searchBarRef: MutableRefObject<HTMLInputElement | undefined>;
}

const SearchBar: FC<ISearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  setSearchResultsContents,
  searchResultsRef,
  focusedSearchResult,
  setFocusedSearchResult,
  setCurrentProduct,
  searchBarRef,
}) => {
  useFetchEffect(
    'products.json',
    showSearchResults(setSearchResultsContents, searchTerm),
    [searchTerm],
    300
  );

  return (
    <div className="search-section__search-bar">
      <InputWithRef
        ref={searchBarRef}
        searchResultsRef={searchResultsRef}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSearchResultsContents={setSearchResultsContents}
        focusedSearchResult={focusedSearchResult}
        setFocusedSearchResult={setFocusedSearchResult}
        setCurrentProduct={setCurrentProduct}
      />
      <img
        onClick={() => searchBarRef.current.focus()}
        src="magnifying-glass.png"
        alt=""
        title="Magnifying glass"
      />
    </div>
  );
};

export default SearchBar;
