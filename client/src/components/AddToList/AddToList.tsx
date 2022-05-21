import { IProducts } from '../../Interfaces/Products';

interface IAddToList {
  className: string;
  selectedProduct: IProducts;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProducts>>;
  allChosenProducts: IProducts[];
  setAllChosenProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
}

const AddToList = ({
  className,
  selectedProduct,
  allChosenProducts,
  setAllChosenProducts,
}: IAddToList) => {
  const addProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setAllChosenProducts([...allChosenProducts, selectedProduct]);
  };

  return (
    <div className={className + '__add-to-list'}>
      <select
        name="list-dropdown"
        id="list-dropdown"
        className={className + '__add-to-list__list-dropdown'}
      >
        <option value="">Legg til i</option>
        <option value="">Dag 1</option>
      </select>
      <div className={className + '__add-to-list__add'} onClick={addProduct}>
        &#65291;
      </div>
    </div>
  );
};

export default AddToList;
