import { IProducts } from '../../Interfaces/Products';
import ListItem from '../ListItem';

interface IAddedProducts {
  allChosenProducts: IProducts[];
}

const AddedProducts = ({ allChosenProducts }: IAddedProducts) => {
  const child = ({ name, properties }: IProducts) => {
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
      {allChosenProducts.map((product) => (
        <ListItem
          className="added-products__name"
          children={child(product)}
          // key={product.name + product.grams}
        />
      ))}
    </ol>
  );
};

export default AddedProducts;
