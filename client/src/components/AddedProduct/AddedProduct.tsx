import Imealplans from '../../Interfaces/Mealplans';
import { IProducts } from '../../Interfaces/Products';
import ListItem from '../ListItem';

interface IAddedProducts {
  mealplan: Imealplans;
}

const AddedProducts = ({ mealplan }: IAddedProducts) => {
  return (
    <>
      {mealplan.products.map(({ name, properties }: IProducts) => (
        <ol className="added-products__product">
          <ListItem
            children={name}
            key={mealplan.listName + name}
            className="added-products__product__name"
          />
          <ListItem
            children={properties.brand}
            key={mealplan.listName + properties.brand}
            className="added-products__product__brand"
          />
          <ListItem
            children={properties.serving + 'g'}
            key={mealplan.listName + properties.serving}
            className="added-products__product__serving"
          />
        </ol>
      ))}
    </>
  );
};

export default AddedProducts;
