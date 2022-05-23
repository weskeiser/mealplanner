import { IMealplan } from '../../Interfaces/Mealplans';
import { IProducts } from '../../Interfaces/Products';
import AddToListDropdown from '../AddToListDropdown/AddToListDropdown';
import ChooseMeal from '../ChooseMeal/ChooseMeal';
import GramInput from '../GramInput/GramInput';

interface IAddToList {
  className: string;
  selectedProduct: IProducts;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProducts>>;
  mealplans: IMealplan[];
  setMealplans: React.Dispatch<React.SetStateAction<Imealplans[]>>;
  setAllChosenProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  gramInputRef: React.MutableRefObject<undefined>;
  selectMealplanDayRef: React.MutableRefObject<undefined>;
  selectMealplanMealRef: React.MutableRefObject<undefined>;
  currentProduct: IProducts | {};
  setCurrentProduct: React.Dispatch<React.SetStateAction<IProducts>>;
}

const AddToList = ({
  className,
  selectedProduct,
  mealplans,
  setMealplans,
  setSelectedProduct,
  currentProduct,
  setCurrentProduct,
  gramInputRef,
  selectMealplanDayRef,
  selectMealplanMealRef,
}: IAddToList) => {
  const addProductToList = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    const mealPlanDayName = selectMealplanDayRef.current.value;
    const mealPlanMealName = selectMealplanMealRef.current.value;

    const updatedMealplan = mealplans.map((mealplan) => {
      if (mealplan.listName === mealPlanDayName) {
        return {
          ...mealplan,
          meals: mealplan.meals.map((meal) => {
            if (meal.listName === mealPlanMealName) {
              return { ...meal, products: [...meal.products, selectedProduct] };
            }
            return meal;
          }),
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
      <AddToListDropdown ref={selectMealplanDayRef} className={className} />
      <ChooseMeal ref={selectMealplanMealRef} className={className} />
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
