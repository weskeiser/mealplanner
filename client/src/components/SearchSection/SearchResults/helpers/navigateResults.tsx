import {
  Dispatch,
  ForwardedRef,
  KeyboardEvent,
  MutableRefObject,
  SetStateAction,
} from 'react';
import { IProducts } from '../../../../Interfaces/Products';
import selectProduct from './selectProduct';

const searchResultsNav = (
  e: KeyboardEvent<HTMLLIElement>,
  searchBarRef: MutableRefObject<HTMLInputElement | undefined>,
  focusedSearchResult: number,
  setFocusedSearchResult: Dispatch<SetStateAction<number>>,
  searchResultsRef: ForwardedRef<HTMLUListElement | undefined>,
  servingInputRef: HTMLInputElement | undefined,
  searchResultsContents: IProducts[],
  setSelectedProduct: Dispatch<SetStateAction<IProducts>>,
  setSelectedProductOriginalServing: Dispatch<SetStateAction<{} | IProducts>>,
  setSearchTerm: Dispatch<SetStateAction<string>>
) => {
  const allSearchResults = (searchResultsRef.current as HTMLUListElement)
    .children;
  const searchBarEl = searchBarRef.current as HTMLInputElement;

  // - Navigate search results descending
  if (e.key === 'ArrowDown') {
    e.preventDefault();

    if (focusedSearchResult === allSearchResults.length - 1) {
      allSearchResults[0].focus();
      setFocusedSearchResult(0);
    } else {
      allSearchResults[focusedSearchResult + 1].focus();
      setFocusedSearchResult((focusedSearchResult) => focusedSearchResult + 1);
    }
  }

  // - Navigate search results ascending
  if (e.key === 'ArrowUp') {
    e.preventDefault();

    if (focusedSearchResult === 0) {
      searchBarEl.focus();
      setFocusedSearchResult(0);
    } else {
      allSearchResults[focusedSearchResult - 1].focus();
      setFocusedSearchResult((focusedSearchResult) => focusedSearchResult - 1);
    }
  }

  if (e.key === 'Enter') {
    e.preventDefault();
    const productId = parseInt(e.target.dataset.id);
    selectProduct(
      productId,
      servingInputRef,
      searchBarRef,
      searchResultsContents,
      setSelectedProduct,
      setSelectedProductOriginalServing,
      setSearchTerm
    );
    searchBarEl.focus();
  }

  if (e.key === 'Escape') {
    searchBarEl.focus();
    setFocusedSearchResult(0);
  }
};

export default searchResultsNav;
