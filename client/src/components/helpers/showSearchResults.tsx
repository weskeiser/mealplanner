import { IProducts } from '../../Interfaces/Products';

const showSearchResults = (
  setSearchResultsContents: React.Dispatch<React.SetStateAction<IProducts[]>>,
  searchTerm: string
) => {
  return (returnedJSON: IProducts[]) => {
    setSearchResultsContents([]);

    let searchResults: [] | IProducts[] = [];
    returnedJSON.forEach((product) => {
      if (
        searchTerm &&
        (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()))
      ) {
        searchResults.push(product);
      }
    });

    searchResults.sort((a, b) => {
      if (a.name.toLowerCase().startsWith(searchTerm.toLowerCase())) {
        return 1;
      } else if (b.name.toLowerCase().startsWith(searchTerm.toLowerCase())) {
        return -1;
      } else if (
        a.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >
        b.name.toLowerCase().indexOf(searchTerm.toLowerCase())
      ) {
        return 1;
      } else if (
        a.name.toLowerCase().indexOf(searchTerm.toLowerCase()) <
        b.name.toLowerCase().indexOf(searchTerm.toLowerCase())
      ) {
        return -1;
      } else {
        if (a.name > b.name) return 1;
        else return -1;
      }
    });

    searchResults.reverse();

    setSearchResultsContents(searchResults);
  };
};

export default showSearchResults;
