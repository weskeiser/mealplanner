import {
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from 'react';
import { IProducts } from '../../Interfaces/Products';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

interface SearchSectionProps {
  focusedSearchResult: number;
  setFocusedSearchResult: Dispatch<SetStateAction<number>>;
  setCurrentProduct: Dispatch<SetStateAction<IProducts | {}>>;
  searchBarRef: MutableRefObject<HTMLInputElement | undefined>;
  setSelectedProduct: Dispatch<SetStateAction<IProducts>>;
  servingInputRef: MutableRefObject<HTMLInputElement | undefined>;
}

const SearchSection: FC<SearchSectionProps> = ({
  focusedSearchResult,
  setFocusedSearchResult,
  setCurrentProduct,
  searchBarRef,
  setSelectedProduct,
  servingInputRef,
}) => {
  const searchResultsRef = useRef<HTMLUListElement | undefined>();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResultsContents, setSearchResultsContents] = useState<
    IProducts[]
  >([]);

  return (
    <section
      className="search-section"
      role="search"
      aria-label="product search"
    >
      <SearchBar
        ref={searchBarRef}
        searchResultsRef={searchResultsRef}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSearchResultsContents={setSearchResultsContents}
        focusedSearchResult={focusedSearchResult}
        setFocusedSearchResult={setFocusedSearchResult}
        setCurrentProduct={setCurrentProduct}
      />
      {searchTerm && (
        <SearchResults
          ref={searchResultsRef}
          searchTerm={searchTerm}
          searchResultsContents={searchResultsContents}
          setSelectedProduct={setSelectedProduct}
          setSearchTerm={setSearchTerm}
          searchBarRef={searchBarRef}
          servingInputRef={servingInputRef}
          setCurrentProduct={setCurrentProduct}
          focusedSearchResult={focusedSearchResult}
          setFocusedSearchResult={setFocusedSearchResult}
        />
      )}
    </section>
  );
};

export default SearchSection;
