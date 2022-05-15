import products from '../../database/products.json';

import { IProducts } from '../../Interfaces/Products';

interface IProps {
  setProductsDisplayed: React.Dispatch<React.SetStateAction<IProducts>>;
}

const SearchBar: React.FC<IProps> = ({ setProductsDisplayed }) => {
  return <input type="text" />;
};

export default SearchBar;
