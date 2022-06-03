import ListItem from '../ListItem';
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

interface ISearchResultsProps {
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
  ISearchResultsProps & RefAttributes<HTMLUListElement | undefined>
> = forwardRef<HTMLUListElement | undefined, ISearchResultsProps>(
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
    useEffect(() => {
      const allSearchResultsEls = searchResultsRef.current.children;

      if (
        allSearchResultsEls.length !== 0 &&
        allSearchResultsEls[0].children[1].title
          .toLowerCase()
          .startsWith(searchTerm.toLowerCase())
      ) {
        setHighlighted(true);
      } else {
        setHighlighted(false);
      }
    }, [searchResultsContents, searchResultsRef, setHighlighted]);

    // Select product on click.
    const selectProduct = (productId: number) => {
      const servingInputEl = servingInputRef.current;
      const searchBarEl = searchBarRef.current;

      searchResultsContents.forEach((product) => {
        if (product.id === productId) {
          setSelectedProduct(product);
        }
      });
      servingInputEl.value = '';
      setCurrentProduct({});
      searchBarEl.value = '';
      setSearchTerm('');
    };

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
            onClick={() => selectProduct(product.id)}
            tabIndex={index}
            data-id={product.id}
            onKeyDown={(e: KeyboardEvent<HTMLLIElement>) =>
              navigateSearch(
                e,
                searchBarRef,
                focusedSearchResult,
                setFocusedSearchResult,
                searchResultsRef,
                selectProduct
              )
            }
            children={
              <SearchResult
                product={product}
                highlighted={highlighted}
                searchTerm={searchTerm}
              />
            }
          />
        ))}
      </ul>
    );
  }
);

export default SearchResults;
