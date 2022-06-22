import ListItem from '../../common/ListItem';
import { IProducts } from '../../../Interfaces/Products';
import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useEffect,
  KeyboardEvent,
  MutableRefObject,
  Dispatch,
  SetStateAction,
} from 'react';
import navigateSearch from './helpers/navigateResults';
import SearchResult from './SearchResult/SearchResult';
import selectProduct from './helpers/selectProduct';
import * as Styled from './SearchResults.styled';

interface SearchResultsProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  searchResultsContents: IProducts[];
  setSelectedProduct: Dispatch<SetStateAction<IProducts>>;
  searchBarRef: MutableRefObject<HTMLInputElement | undefined>;
  servingInputRef: MutableRefObject<HTMLInputElement | undefined>;
  setSelectedProductOriginalServing: Dispatch<SetStateAction<{} | IProducts>>;
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
      setSelectedProductOriginalServing,
      focusedSearchResult,
      setFocusedSearchResult,
    },
    searchResultsRef
  ) => {
    useEffect(() => {
      setFocusedSearchResult(0);
    }, [searchTerm, setFocusedSearchResult]);

    return (
      <Styled.SearchResults ref={searchResultsRef} title="search results">
        {searchResultsContents.map((product, index) => (
          <ListItem
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
                setSelectedProductOriginalServing,
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
                setSelectedProductOriginalServing,
                setSearchTerm
              )
            }
          >
            <SearchResult product={product} searchTerm={searchTerm} />
          </ListItem>
        ))}
      </Styled.SearchResults>
    );
  }
);

export default SearchResults;
