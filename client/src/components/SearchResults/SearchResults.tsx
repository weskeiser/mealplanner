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
} from 'react';
import ProductName from './ProductName';
import searchResultsNav from './searchResultsNav';

interface ISearchResultsProps {
  searchTerm: string;
  setSearchTerm: Dispatch<React.SetStateAction<string>>;
  searchResultsContents: IProducts[];
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProducts>>;
  searchBarRef: MutableRefObject<HTMLInputElement | undefined>;
  gramInputRef: MutableRefObject<HTMLInputElement | undefined>;
  setCurrentProduct: Dispatch<React.SetStateAction<{} | IProducts>>;
  focusedSearchResult: number;
  setFocusedSearchResult: Dispatch<React.SetStateAction<number>>;
  highlighted: boolean;
  setHighlighted: Dispatch<React.SetStateAction<boolean>>;
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
      gramInputRef,
      setCurrentProduct,
      focusedSearchResult,
      setFocusedSearchResult,
      highlighted,
      setHighlighted,
    },
    searchResultsRef
  ) => {
    useEffect(() => {
      setFocusedSearchResult(0);
    }, [searchTerm, setFocusedSearchResult]);

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
      const gramInputEl = gramInputRef.current;
      const searchBarEl = searchBarRef.current;

      searchResultsContents.forEach((product) => {
        if (product.id === productId) {
          setSelectedProduct(product);
        }
      });
      gramInputEl.value = '';
      setCurrentProduct({});
      searchBarEl.value = '';
      setSearchTerm('');
    };

    const visibleIfSearchTerm = searchTerm ? 'search-results' : 'hidden';

    return (
      <ul className={visibleIfSearchTerm} ref={searchResultsRef}>
        {searchResultsContents.map((product, index) => (
          <ListItem
            children={
              <>
                <img
                  src={product.properties.logo}
                  alt={product.name}
                  title={product.name}
                  className="search-results__list-item__logo"
                />
                <p
                  title={product.name}
                  className="search-results__list-item__name"
                >
                  <ProductName
                    productName={product.name}
                    highlighted={highlighted}
                    searchTerm={searchTerm}
                  />
                </p>
                <p
                  title={product.properties.brand}
                  className="search-results__list-item__brand"
                >
                  {product.properties.brand}
                </p>
              </>
            }
            className="search-results__list-item"
            key={product.id}
            onClick={() => selectProduct(product.id)}
            tabIndex={index}
            data-id={product.id}
            onKeyDown={(e: KeyboardEvent<HTMLLIElement>) =>
              searchResultsNav(
                e,
                searchBarRef,
                focusedSearchResult,
                setFocusedSearchResult,
                searchResultsRef,
                selectProduct
              )
            }
          />
        ))}
      </ul>
    );
  }
);

export default SearchResults;
