import { IProducts } from '../../Interfaces/Products';
import GramInput from '../GramInput/GramInput';

interface IAddToList {
  className: string;
  selectedProduct: IProducts;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProducts>>;
  allChosenProducts: IProducts[];
  setAllChosenProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  gramInputRef: React.MutableRefObject<undefined>;
  currentProduct: IProducts | {};
  setCurrentProduct: React.Dispatch<React.SetStateAction<IProducts>>;
}

const AddToList = ({
  className,
  selectedProduct,
  allChosenProducts,
  setAllChosenProducts,
  setSelectedProduct,
  gramInputRef,
  currentProduct,
  setCurrentProduct,
}: IAddToList) => {
  const addProduct = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setAllChosenProducts([...allChosenProducts, selectedProduct]);
  };

  return (
    <div className={className + '__add-to-list'}>
      <GramInput
        ref={gramInputRef}
        className={className + '__add-to-list__gram-input'}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
      />
      <select
        name="list-dropdown"
        id="list-dropdown"
        className={className + '__add-to-list__list-dropdown'}
      >
        <option value="">Legg til i</option>
        <option value="">Dag 1</option>
      </select>
      <div
        className={className + '__add-to-list__add'}
        onClick={(e) => addProduct(e)}
      >
        &#65291;
      </div>
    </div>
  );
};

export default AddToList;
