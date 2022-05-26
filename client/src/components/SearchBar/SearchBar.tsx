import { FC, forwardRef, MutableRefObject } from 'react';
import useFetchEffect from '../../hooks/useFetchEffect';
import { IProducts } from '../../Interfaces/Products';
import showSearchResults from '../utils/showSearchResults';
import InputWithRef from './InputWithRef';

interface ISearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSearchResultsContents: React.Dispatch<React.SetStateAction<IProducts[]>>;
  focusedSearchResult: number;
  setFocusedSearchResult: React.Dispatch<React.SetStateAction<number>>;
  setCurrentProduct: React.Dispatch<React.SetStateAction<IProducts>>;
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
    <div className="search-bar" role="search">
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
