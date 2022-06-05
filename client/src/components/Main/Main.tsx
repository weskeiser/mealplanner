import { Dispatch, FC, MutableRefObject, SetStateAction } from 'react';
import { IProducts } from '../../Interfaces/Products';
import hideSearchResults from '../utils/hideSearchResults';

interface MainProps {
  children: any;
  searchTerm: string;
  searchBarRef: MutableRefObject<HTMLInputElement | undefined>;
  setCurrentProduct: Dispatch<SetStateAction<{} | IProducts>>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setFocusedSearchResult: Dispatch<SetStateAction<number>>;
}

const Main: FC<MainProps> = ({
  children,
  searchTerm,
  searchBarRef,
  setCurrentProduct,
  setSearchTerm,
  setFocusedSearchResult,
}) => {
  return (
    <main
      onClick={(e) =>
        hideSearchResults(
          e,
          searchTerm,
          searchBarRef,
          setCurrentProduct,
          setSearchTerm,
          setFocusedSearchResult
        )
      }
    >
      {children}
    </main>
  );
};

export default Main;
