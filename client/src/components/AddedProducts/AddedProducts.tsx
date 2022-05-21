import { IProducts } from '../../Interfaces/Products';
import ListItem from '../ListItem';

interface IAddedProducts {
  allChosenProducts: IProducts[];
}

const AddedProducts = ({ allChosenProducts }: IAddedProducts) => {
  const addedProduct = ({ name, properties }: IProducts) => {
    return (
      <ol className="added-products__product">
        <ListItem children={name} key={name} />
        <ListItem children={properties.brand} key={properties.brand} />
        <ListItem
          children={properties.serving + 'g'}
          key={properties.serving}
          className="added-products__product__serving"
        />
      </ol>
    );
  };

  return (
    <ol className="added-products">
      {allChosenProducts.map((product, index) => (
        <ListItem
          className="added-products__name"
          children={addedProduct(product)}
          key={product.id + index}
        />
      ))}
    </ol>
  );
};

export default AddedProducts;
