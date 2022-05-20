import { IProducts } from '../../Interfaces/Products';
import ListItem from '../ListItem';

interface AddedProducts {
  allChosenProducts: IProducts[];
}

const AddedProducts = ({ allChosenProducts }: AddedProducts) => {
  const child = ({ name, properties }: IProducts) => {
    return (
      <ol className="added-products__product">
        <ListItem children={name} key={name} />
        <ListItem
          children={properties.serving + 'g'}
          key={properties.serving}
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
