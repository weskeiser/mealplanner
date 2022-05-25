import ListItem from '../ListItem';
import { IProducts } from '../../Interfaces/Products';
import { forwardRef, useEffect } from 'react';

interface ISearchResultsProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchResultsContents: IProducts[];
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProducts>>;
  searchBarRef: React.MutableRefObject<undefined>;
  gramInputRef: React.MutableRefObject<undefined>;
  setCurrentProduct: React.Dispatch<React.SetStateAction<IProducts>>;
}

const SearchResults = forwardRef(
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
    }: ISearchResultsProps,
    searchResultsRef
  ) => {
    useEffect(() => {
      setFocusedSearchResult(0);
    }, [searchTerm]);

    const selectProduct = (productId) => {
      searchResultsContents.map((product) => {
        if (product.id === productId) {
          console.log(product);
          setSelectedProduct(product);
        }
      });
      gramInputRef.current.value = '';
      setCurrentProduct({});
      searchBarRef.current.value = '';
      setSearchTerm('');
    };

    // Navigate search results descending
    const searchResultsNav = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const allSearchResults = searchResultsRef.current.children;

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

      // Navigate search results ascending
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const allSearchResults = searchResultsRef.current.children;

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
        const productId = parseInt(e.target.dataset.id);
        selectProduct(productId);
      }

      if (e.key === 'Escape') {
        setCurrentProduct({});
        searchBarRef.current.value = '';
        setSearchTerm('');
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
                  {product.name}
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
            onClick={(e) => selectProduct(product.id)}
            tabIndex={index}
            data-id={product.id}
            onKeyDown={(e) => searchResultsNav(e)}
          />
        ))}
      </ul>
    );
  }
);

export default SearchResults;
