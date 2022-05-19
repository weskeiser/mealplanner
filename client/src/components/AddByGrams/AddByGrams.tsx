import { IProducts } from '../../Interfaces/Products';

interface IAddByGrams {
  chosenProduct: IProducts;
  allChosenProducts: IProducts[];
  setAllChosenProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
}

const AddByGrams = ({
  chosenProduct,
  allChosenProducts,
  setAllChosenProducts,
}: IAddByGrams) => {
  const incrementProduct = (e) => {
    e.preventDefault();

    const input = Array.from(e.target.form.children).filter(
      (child) => child.name === 'amountInGrams'
    )[0];

    const chosenProductWithGrams = {
      ...chosenProduct,
      grams: input.value,
    };
    setAllChosenProducts([...allChosenProducts, chosenProductWithGrams]);
  };

  return (
    <div>
      <h2>{chosenProduct.name}</h2>
      <form className="add-by-grams__increment">
        <input type="text" name="amountInGrams" id="addProduct" />
        <label htmlFor="amountInGrams">gram</label>
        <button onClick={(e) => incrementProduct(e)}>Legg til</button>
      </form>
    </div>
  );
};

export default AddByGrams;
