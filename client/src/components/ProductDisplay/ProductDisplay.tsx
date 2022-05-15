import ProductList from '../NutritionList/NutritionList';
import { IProductsDisplayed } from '../../Interfaces/Products';

const ProductDisplay = ({ productsDisplayed }: IProductsDisplayed) => {
  const { name, category, properties } = productsDisplayed;
  const { brand } = properties;

  return (
    <div className="product">
      <div className="product__title">
        <h2 className="product__title__name">{name}</h2>
        <h3>{category}</h3>
        <h3>{brand}</h3>
      </div>
      <ProductList
        className="product__nutrition__list"
        productsDisplayed={productsDisplayed}
      />
    </div>
  );
};

export default ProductDisplay;
