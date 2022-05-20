import { IProducts } from '../../Interfaces/Products';
import ListItem from '../ListItem';

interface AddedProducts {
  allChosenProducts: IProducts[];
}

const AddedProducts = ({ allChosenProducts }: AddedProducts) => {
  const child = ({ name, grams }: IProducts) => {
    return (
      <ol className="added-products__product">
        <ListItem children={name} key={name} />
        <ListItem children={grams + ' gram'} key={grams} />
      </ol>
    );
  };

  return (
    <ol className="added-products">
      {allChosenProducts.map((product) => (
        <ListItem className="added-products__name" children={child(product)} />
      ))}
    </ol>
  );
};

export default AddedProducts;
