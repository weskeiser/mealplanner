import {
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from 'react';
import { IProducts } from '../../Interfaces/Products';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

interface SearchSectionProps {
  setCurrentProduct: Dispatch<SetStateAction<IProducts | {}>>;
  setSelectedProduct: Dispatch<SetStateAction<IProducts>>;
  servingInputRef: MutableRefObject<HTMLInputElement | undefined>;
}

const SearchSection: FC<SearchSectionProps> = ({
  setCurrentProduct,
  setSelectedProduct,
  servingInputRef,
}) => {
  const searchResultsRef = useRef<HTMLUListElement | undefined>();
  const searchBarRef = useRef<HTMLInputElement | undefined>();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResultsContents, setSearchResultsContents] = useState<
    IProducts[]
  >([]);
  const [focusedSearchResult, setFocusedSearchResult] = useState(0);

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
