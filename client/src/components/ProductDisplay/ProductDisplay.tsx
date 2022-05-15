import ProductList from '../ProductList/ProductList';
import { IProductsDisplayed } from '../../Interfaces/Products';

const ProductDisplay = ({ productsDisplayed }: IProductsDisplayed) => {
  return (
    <ProductList
      className="product__list"
      productsDisplayed={productsDisplayed}
    />
  );
};

export default ProductDisplay;
