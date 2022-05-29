import {
  forwardRef,
  ForwardRefExoticComponent,
  MutableRefObject,
  RefAttributes,
} from 'react';
import { IProducts } from '../../Interfaces/Products';

interface IInputWithRef {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSearchResultsContents: React.Dispatch<React.SetStateAction<IProducts[]>>;
  focusedSearchResult: number;
  setFocusedSearchResult: React.Dispatch<React.SetStateAction<number>>;
  setCurrentProduct: React.Dispatch<React.SetStateAction<IProducts>>;
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
    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;
      if (!input.value) {
        setSearchResultsContents([]);
      }
      setSearchTerm(input.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const searchResultsEl = searchResultsRef.current;
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
      <input
        ref={searchBarRef}
        type="text"
        onInput={(e) => handleInput(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder="Søk etter produkt.."
      />
    );
  }
);

export default InputWithRef;
