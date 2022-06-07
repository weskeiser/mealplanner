import { Dispatch, MouseEvent, MutableRefObject, SetStateAction } from 'react';
import { IProducts } from '../../Interfaces/Products';

const hideSearchResults = (
  e: MouseEvent<HTMLElement, MouseEvent>,
  searchTerm: string,
  searchBarRef: MutableRefObject<HTMLInputElement | undefined>,
  setSelectedProductOriginalServing: Dispatch<SetStateAction<{} | IProducts>>,
  setSearchTerm: Dispatch<SetStateAction<string>>,
  setFocusedSearchResult: Dispatch<SetStateAction<number>>
) => {
  if (searchTerm && e.target.className !== 'search-bar__input') {
    setSelectedProductOriginalServing({});
    searchBarRef.current.value = '';
    setSearchTerm('');
    setFocusedSearchResult(0);
  }
};

export default hideSearchResults;
