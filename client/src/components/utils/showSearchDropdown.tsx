import { IProducts } from '../../Interfaces/Products';

const showSearchDropdown = (
  setSearchDropdownContents: React.Dispatch<React.SetStateAction<IProducts[]>>,
  searchTerm: string
) => {
  return (returnedJSON: IProducts[]) => {
    setSearchDropdownContents([]);
    returnedJSON.forEach((product) => {
      if (
        (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
        searchTerm
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
