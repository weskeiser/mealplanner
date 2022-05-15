import ListItem from '../ListItem/index';
import { ProductsDisplayed } from '../../Interfaces/Products';

const ProductList = (productsDisplayed: ProductsDisplayed) => {
  for (let product in productsDisplayed) {
    // if (productsDisplayed.id === id) {
    return (
      <ListItem
        className={''}
        key={productsDisplayed.id}
        children={productsDisplayed.name}
      />
    );
  }
  // }
};

export default ProductList;
