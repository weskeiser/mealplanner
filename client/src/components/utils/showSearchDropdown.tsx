import { IProducts } from '../../Interfaces/Products';

const showSearchDropdown = (
  setSearchDropdownContents: React.Dispatch<React.SetStateAction<IProducts[]>>,
  searchTerm: string
) => {
  return (returnedJSON: IProducts[]) => {
    setSearchDropdownContents([]);
    returnedJSON.forEach((product) => {
      if (
        searchTerm &&
        (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.properties.brand
            .toLowerCase()
            .includes(searchTerm.toLocaleLowerCase()))
      ) {
        setSearchDropdownContents((currentState: IProducts[]) => [
          ...currentState,
          product,
        ]);
      }
    });
  };
};

export default showSearchDropdown;
