import { IMealPlan } from '../../Interfaces/MealPlans';
import { IProducts } from '../../Interfaces/Products';
import AddToListDropdown from '../AddToListDropdown/AddToListDropdown';
import ChooseMeal from '../ChooseMeal/ChooseMeal';
import GramInput from '../GramInput/GramInput';

interface IAddToList {
  className: string;
  selectedProduct: IProducts;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProducts>>;
  mealPlans: IMealPlan[];
  setMealPlans: React.Dispatch<React.SetStateAction<ImealPlans[]>>;
  setAllChosenProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  gramInputRef: React.MutableRefObject<undefined>;
  selectMealPlanDayRef: React.MutableRefObject<undefined>;
  selectMealPlanMealRef: React.MutableRefObject<undefined>;
  currentProduct: IProducts | {};
  setCurrentProduct: React.Dispatch<React.SetStateAction<IProducts>>;
}

const AddToList = ({
  className,
  selectedProduct,
  mealPlans,
  setMealPlans,
  setSelectedProduct,
  currentProduct,
  setCurrentProduct,
  gramInputRef,
  selectMealPlanDayRef,
  selectMealPlanMealRef,
}: IAddToList) => {
  const addProductToMeal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    const mealPlanDayName = selectMealPlanDayRef.current.value;
    const mealPlanMealName = selectMealPlanMealRef.current.value;

    const newProduct = {
      ...selectedProduct,
      mealPlanDay: selectMealPlanDayRef.current.value,
      mealPlanMeal: selectMealPlanMealRef.current.value,
    };

    const updatedMealPlan = mealPlans.map((mealPlan) => {
      if (mealPlan.listName === mealPlanDayName) {
        return {
          ...mealPlan,
          meals: mealPlan.meals.map((meal) => {
            if (meal.listName === mealPlanMealName) {
              return { ...meal, products: [...meal.products, newProduct] };
            }
            return meal;
          }),
        };
      }
      return mealPlan;
    });
    setMealPlans(updatedMealPlan);
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
      <AddToListDropdown ref={selectMealPlanDayRef} className={className} />
      <ChooseMeal ref={selectMealPlanMealRef} className={className} />
      <button
        className={className + '__add-to-list__add'}
        onClick={(e) => addProductToMeal(e)}
      >
        Legg til
      </button>
    </div>
  );
};

export default AddToList;
