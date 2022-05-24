const hideSearchResults = (
  e,
  searchTerm,
  searchBarRef,
  setCurrentProduct,
  setSearchTerm
) => {
  if (searchTerm && e.target.className !== 'search-bar__input') {
    console.log(e.target.className);
    setCurrentProduct({});
    searchBarRef.current.value = '';
    setSearchTerm('');
  }
};

export default hideSearchResults;
