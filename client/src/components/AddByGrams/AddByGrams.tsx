import { IProducts } from '../../Interfaces/Products';

interface IAddByGrams {
  chosenProduct: IProducts;
}

const AddByGrams = ({ chosenProduct }: IAddByGrams) => {
  return (
    <div>
      <h2>{chosenProduct.name}</h2>
      <button>Add</button>
    </div>
  );
};

export default AddByGrams;
