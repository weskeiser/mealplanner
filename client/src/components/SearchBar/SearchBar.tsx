import {
  Dispatch,
  FormEvent,
  forwardRef,
  ForwardRefExoticComponent,
  KeyboardEvent,
  MutableRefObject,
  RefAttributes,
  SetStateAction,
} from 'react';
import useFetchEffect from '../../hooks/useFetchEffect';
import { IProducts } from '../../Interfaces/Products';
import showSearchResults from '../utils/showSearchResults';

interface IInputWithRef {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setSearchResultsContents: Dispatch<SetStateAction<IProducts[]>>;
  focusedSearchResult: number;
  setFocusedSearchResult: Dispatch<SetStateAction<number>>;
  setCurrentProduct: Dispatch<SetStateAction<IProducts>>;
  searchResultsRef: MutableRefObject<HTMLUListElement | undefined>;
}

const InputWithRef: ForwardRefExoticComponent<
  IInputWithRef & RefAttributes<HTMLInputElement | undefined>
> = forwardRef<HTMLInputElement | undefined, IInputWithRef>(
  (
    {
      searchTerm,
      setSearchTerm,
      setSearchResultsContents,
      searchResultsRef,
      focusedSearchResult,
      setFocusedSearchResult,
      setCurrentProduct,
    },
    searchBarRef
  ) => {
    useFetchEffect(
      'products.json',
      showSearchResults(setSearchResultsContents, searchTerm),
      [searchTerm],
      300
    );

    const handleInput = (e: FormEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;
      if (!input.value) {
        setSearchResultsContents([]);
      }
      setSearchTerm(input.value);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      const searchResultsEl = searchResultsRef.current as HTMLUListElement;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (searchTerm) {
          const firstSearchResult =
            searchResultsEl.children[focusedSearchResult + 0];

          firstSearchResult.focus();
          setFocusedSearchResult(
            (focusedSearchResult) => focusedSearchResult + 0
          );
        }
      }

      if (e.key === 'Escape') {
        setCurrentProduct({});
        searchBarRef.current.value = '';
        setSearchTerm('');
        setFocusedSearchResult(0);

        if (!searchTerm) {
          searchBarRef.current.blur();
        }
      }
    };

    return (
      <>
        <div className="search-section__search-bar">
          <input
            ref={searchBarRef}
            type="text"
            onInput={(e) => handleInput(e)}
            onKeyDown={(e) => handleKeyDown(e)}
            placeholder="Søk etter produkt.."
            title="search bar"
          />
          <img
            onClick={() => searchBarRef.current.focus()}
            src="magnifying-glass.png"
            alt=""
            title="Magnifying glass"
          />
        </div>
      </>
    );
  }
);

export default InputWithRef;
