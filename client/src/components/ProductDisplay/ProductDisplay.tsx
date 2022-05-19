import NutritionList from '../NutritionList/NutritionList';
import { IProducts } from '../../Interfaces/Products';

interface IProductDisplay {
  chosenProduct: IProducts;
}

const ProductDisplay = ({ chosenProduct }: IProductDisplay) => {
  const { name, category, properties } = chosenProduct;
  const { brand, logo } = properties;

  return (
    <div className="product">
      <div className="product__heading">
        <img src={logo} alt={brand} className="product__heading__logo" />
        <h2 className="product__heading__name">{name}</h2>
        {/* <h3>{category}</h3> */}
        <h3>{brand}</h3>
      </div>
      <NutritionList
        className="product__nutrition__list"
        chosenProduct={chosenProduct}
      />
    </div>
  );
};

export default ProductDisplay;
