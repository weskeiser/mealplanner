import ListItem from '../common/ListItem';
import { IProducts } from '../../Interfaces/Products';
import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useEffect,
  KeyboardEvent,
  MutableRefObject,
  Dispatch,
  useState,
  SetStateAction,
} from 'react';
import navigateSearch from './navigateResults';
import SearchResult from './SearchResult/SearchResult';
import useHighlighter from './hooks/useHighlighter';
import selectProduct from './selectProduct';

interface SearchResultsProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  searchResultsContents: IProducts[];
  setSelectedProduct: Dispatch<SetStateAction<IProducts>>;
  searchBarRef: MutableRefObject<HTMLInputElement | undefined>;
  servingInputRef: MutableRefObject<HTMLInputElement | undefined>;
  setCurrentProduct: Dispatch<SetStateAction<{} | IProducts>>;
  focusedSearchResult: number;
  setFocusedSearchResult: Dispatch<SetStateAction<number>>;
}

const SearchResults: ForwardRefExoticComponent<
  SearchResultsProps & RefAttributes<HTMLUListElement | undefined>
> = forwardRef<HTMLUListElement | undefined, SearchResultsProps>(
  (
    {
      searchTerm,
      searchResultsContents,
      setSelectedProduct,
      setSearchTerm,
      searchBarRef,
      servingInputRef,
      setCurrentProduct,
      focusedSearchResult,
      setFocusedSearchResult,
    },
    searchResultsRef
  ) => {
    useEffect(() => {
      setFocusedSearchResult(0);
    }, [searchTerm, setFocusedSearchResult]);

    const [highlighted, setHighlighted] = useState(false);

    // Highlight span if matching searchTerm.
    useHighlighter(searchResultsRef, searchTerm, setHighlighted, [
      searchResultsContents,
      searchResultsRef,
      setHighlighted,
    ]);

    const visibleIfSearchTerm = searchTerm
      ? 'search-section__search-results'
      : 'hidden';

    return (
      <ul
        className={visibleIfSearchTerm}
        ref={searchResultsRef}
        title="search results"
      >
        {searchResultsContents.map((product, index) => (
          <ListItem
            className="search-section__search-results__list-item"
            key={product.id}
            tabIndex={index}
            data-id={product.id}
            onClick={() =>
              selectProduct(
                product.id,
                servingInputRef,
                searchBarRef,
                searchResultsContents,
                setSelectedProduct,
                setCurrentProduct,
                setSearchTerm
              )
            }
            onKeyDown={(e: KeyboardEvent<HTMLLIElement>) =>
              navigateSearch(
                e,
                searchBarRef,
                focusedSearchResult,
                setFocusedSearchResult,
                searchResultsRef,
                servingInputRef,
                searchResultsContents,
                setSelectedProduct,
                setCurrentProduct,
                setSearchTerm
              )
            }
          >
            <SearchResult
              product={product}
              highlighted={highlighted}
              searchTerm={searchTerm}
            />
          </ListItem>
        ))}
      </ul>
    );
  }
);

export default SearchResults;
