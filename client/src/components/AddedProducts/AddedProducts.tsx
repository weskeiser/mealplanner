import { IProducts } from '../../Interfaces/Products';
import ListItem from '../ListItem';

const AddedProducts: React.FC<IProducts[]> = (allChosenProducts) => {
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
      {allChosenProducts.allChosenProducts.map((product) => (
        <ListItem className="added-products__name" children={child(product)} />
      ))}
    </ol>
  );
};

export default AddedProducts;
