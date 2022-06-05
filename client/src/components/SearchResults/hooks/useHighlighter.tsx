import { Dispatch, SetStateAction, useEffect } from 'react';

const useHighlighter = (
  searchResultsRef: HTMLUListElement | undefined,
  searchTerm: string,
  setHighlighted: Dispatch<SetStateAction<boolean>>,
  dependencies: any
) => {
  useEffect(() => {
    const allSearchResultsEls = searchResultsRef.current.children;

    if (
      allSearchResultsEls.length !== 0 &&
      allSearchResultsEls[0].children[1].title
        .toLowerCase()
        .startsWith(searchTerm.toLowerCase())
    ) {
      setHighlighted(true);
    } else {
      setHighlighted(false);
    }
  }, dependencies);
};

export default useHighlighter;
