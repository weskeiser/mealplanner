import { IProducts } from '../../Interfaces/Products';

const showSearchResults = (
  setSearchResultsContents: React.Dispatch<React.SetStateAction<IProducts[]>>,
  searchTerm: string
) => {
  return (returnedJSON: IProducts[]) => {
    setSearchResultsContents([]);
    returnedJSON.forEach((product) => {
      if (
        searchTerm &&
        (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.properties.brand
            .toLowerCase()
            .includes(searchTerm.toLocaleLowerCase()))
      ) {
        setSearchResultsContents((currentState: IProducts[]) => [
          ...currentState,
          product,
        ]);
      }
    });
  };
};

export default showSearchResults;
