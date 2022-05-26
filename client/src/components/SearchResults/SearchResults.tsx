import ListItem from '../ListItem';
import { IProducts } from '../../Interfaces/Products';
import { forwardRef, RefForwardingComponent, useEffect } from 'react';
import ProductName from './ProductName';

interface ISearchResultsProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchResultsContents: IProducts[];
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProducts>>;
  searchBarRef: React.MutableRefObject<undefined>;
  gramInputRef: React.MutableRefObject<undefined>;
  setCurrentProduct: React.Dispatch<React.SetStateAction<IProducts>>;
  focusedSearchResult: number;
  setFocusedSearchResult: React.Dispatch<React.SetStateAction<number>>;
  highlighted: boolean;
  setHighlighted: React.Dispatch<React.SetStateAction<boolean>>;
  // ref?: MutableRefObject<HTMLUListElement> | undefined;
  // searchResultsRef: React.MutableRefObject<HTMLUListElement | null>
}

const SearchResults: RefForwardingComponent<
  HTMLUListElement | undefined,
  ISearchResultsProps
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
      const allSearchResults = searchResultsRef.current.children;

      if (
        allSearchResults.length !== 0 &&
        allSearchResults[0].children[1].title
          .toLowerCase()
          .startsWith(searchTerm.toLowerCase())
      ) {
        setHighlighted(true);
      } else {
        setHighlighted(false);
      }
    }, [searchResultsContents, searchResultsRef, setHighlighted]);

    // Select product on click.
    const selectProduct = (productId) => {
      searchResultsContents.map((product) => {
        if (product.id === productId) {
          setSelectedProduct(product);
        }
      });
      gramInputRef.current.value = '';
      setCurrentProduct({});
      searchBarRef.current.value = '';
      setSearchTerm('');
    };

    const searchResultsNav = (e: React.KeyboardEvent<HTMLElement>) => {
      const allSearchResults = searchResultsRef.current.children;

      // - Navigate search results descending
      if (e.key === 'ArrowDown') {
        e.preventDefault();

        console.log(allSearchResults[0].children[1].title);

        if (focusedSearchResult === allSearchResults.length - 1) {
          allSearchResults[0].focus();
          setFocusedSearchResult(0);
        } else {
          allSearchResults[focusedSearchResult + 1].focus();
          setFocusedSearchResult(
            (focusedSearchResult) => focusedSearchResult + 1
          );
        }
      }

      // - Navigate search results ascending
      if (e.key === 'ArrowUp') {
        e.preventDefault();

        if (focusedSearchResult === 0) {
          searchBarRef.current.focus();
          setFocusedSearchResult(0);
        } else {
          allSearchResults[focusedSearchResult - 1].focus();
          setFocusedSearchResult(
            (focusedSearchResult) => focusedSearchResult - 1
          );
        }
      }

      if (e.key === 'Enter') {
        e.preventDefault();
        const productId = parseInt(e.target.dataset.id);
        selectProduct(productId);
      }

      if (e.key === 'Escape') {
        searchBarRef.current.focus();
        setFocusedSearchResult(0);
      }
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
            onKeyDown={(e: React.KeyboardEvent<HTMLElement>) =>
              searchResultsNav(e)
            }
          />
        ))}
      </ul>
    );
  }
);

export default SearchResults;
