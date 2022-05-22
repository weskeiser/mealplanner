import Imealplans from '../../Interfaces/Mealplans';
import { IProducts } from '../../Interfaces/Products';
import AddToListDropdown from '../AddToListDropdown/AddToListDropdown';
import ChooseMeal from '../ChooseMeal/ChooseMeal';
import GramInput from '../GramInput/GramInput';

interface IAddToList {
  className: string;
  selectedProduct: IProducts;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProducts>>;
  mealplans: Imealplans[];
  setMealplans: React.Dispatch<React.SetStateAction<Imealplans[]>>;
  setAllChosenProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  gramInputRef: React.MutableRefObject<undefined>;
  chooseMealRef: React.MutableRefObject<undefined>;
  currentProduct: IProducts | {};
  setCurrentProduct: React.Dispatch<React.SetStateAction<IProducts>>;
}

const AddToList = ({
  className,
  selectedProduct,
  mealplans,
  setMealplans,
  setSelectedProduct,
  gramInputRef,
  chooseMealRef,
  currentProduct,
  setCurrentProduct,
  addToListDropdownRef,
}: IAddToList) => {
  const addProductToList = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    const currentListName = addToListDropdownRef.current.value;

    const updatedMealplan = mealplans.map((mealplan) => {
      if (mealplan.listName === currentListName) {
        return {
          ...mealplan,
          products: [...mealplan.products, selectedProduct],
        };
      }
      return mealplan;
    });

    setMealplans(updatedMealplan);
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
      <AddToListDropdown ref={addToListDropdownRef} className={className} />
      <ChooseMeal ref={chooseMealRef} className={className} />
      <button
        className={className + '__add-to-list__add'}
        onClick={(e) => addProductToList(e)}
      >
        Legg til
      </button>
    </div>
  );
};

export default AddToList;
