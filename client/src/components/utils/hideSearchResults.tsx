const hideSearchResults = (
  e,
  searchTerm,
  searchBarRef,
  setCurrentProduct,
  setSearchTerm,
  setFocusedSearchResult
) => {
  if (searchTerm && e.target.className !== 'search-bar__input') {
    setCurrentProduct({});
    searchBarRef.current.value = '';
    setSearchTerm('');
    setFocusedSearchResult(0);
  }
};

export default hideSearchResults;
