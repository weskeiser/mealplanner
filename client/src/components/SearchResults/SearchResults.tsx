import ListItem from '../ListItem';
import { IProducts } from '../../Interfaces/Products';
import { forwardRef } from 'react';

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
    const selectProduct = (key) => {
      searchResultsContents.map((product) => {
        if (product.id === key) {
          setSelectedProduct(product);
        }
      });
      gramInputRef.current.value = '';
      setCurrentProduct({});
      searchBarRef.current.value = '';
      setSearchTerm('');
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const allSearchResults = e.target.parentElement.children;
        const nextSearchResult = allSearchResults[focusedSearchResult];

        nextSearchResult.focus();

        setFocusedSearchResult((focusedSearchResult) => {
          if (focusedSearchResult >= allSearchResults.length - 1) {
            return 0;
          } else {
            return focusedSearchResult + 1;
          }
        });
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        console.log(focusedSearchResult);
        const allSearchResults = e.target.parentElement.children;
        const nextSearchResult = allSearchResults[focusedSearchResult - 1];
        searchResultsRef.current.children[focusedSearchResult - 2].focus();

        console.log(nextSearchResult);

        // console.log(allSearchResults.length);

        setFocusedSearchResult((focusedSearchResult) => {
          // if (focusedSearchResult >= 1) {
          //   return allSearchResults.length + 1;
          // } else {
          //   return focusedSearchResult - 1;
          // }
          return focusedSearchResult - 1;
        });
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
            onKeyDown={(e) => handleKeyDown(e)}
          />
        ))}
      </ul>
    );
  }
);

export default SearchResults;
