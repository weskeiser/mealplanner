import { ForwardedRef, KeyboardEvent } from 'react';

const searchResultsNav = (
  e: KeyboardEvent<HTMLLIElement>,
  searchBarRef: React.MutableRefObject<HTMLInputElement | undefined>,
  focusedSearchResult: number,
  setFocusedSearchResult: React.Dispatch<React.SetStateAction<number>>,
  searchResultsRef: ForwardedRef<HTMLUListElement | undefined>,
  selectProduct: (productId: number) => void
) => {
  const allSearchResults = searchResultsRef.current.children;
  const searchBarEl = searchBarRef.current;

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
    selectProduct(productId);
    searchBarEl.focus();
  }

  if (e.key === 'Escape') {
    searchBarEl.focus();
    setFocusedSearchResult(0);
  }
};

export default searchResultsNav;
