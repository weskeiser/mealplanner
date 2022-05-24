import { IMealplans } from '../../Interfaces/Mealplans';
import { IProducts } from '../../Interfaces/Products';
import SelectMealplanDay from '../SelectMealplanDay/SelectMealplanDay';
import SelectMealplanMeal from '../SelectMealplanMeal/SelectMealplanMeal';
import GramInput from '../GramInput/GramInput';
import { useRef } from 'react';

interface IAddToMealplan {
  className: string;
  selectedProduct: IProducts;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProducts>>;
  mealPlans: IMealplans[];
  setMealplans: React.Dispatch<React.SetStateAction<ImealPlans[]>>;
  setAllChosenProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  gramInputRef: React.MutableRefObject<undefined>;
  selectMealplanDayRef: React.MutableRefObject<undefined>;
  selectMealplanMealRef: React.MutableRefObject<undefined>;
  currentProduct: IProducts | {};
  setCurrentProduct: React.Dispatch<React.SetStateAction<IProducts>>;
}

const AddToMealplan = ({
  className,
  selectedProduct,
  mealPlans,
  setMealplans,
  setSelectedProduct,
  currentProduct,
  setCurrentProduct,
  gramInputRef,
}: IAddToMealplan) => {
  const selectMealplanDayRef = useRef();
  const selectMealplanMealRef = useRef();

  const addProductToMeal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    const mealPlanDayName = selectMealplanDayRef.current.value;
    const mealPlanMealName = selectMealplanMealRef.current.value;

    const newProduct = {
      ...selectedProduct,
      mealPlanDay: selectMealplanDayRef.current.value,
      mealPlanMeal: selectMealplanMealRef.current.value,
    };

    const updatedMealplan = mealPlans.map((mealPlan) => {
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
    setMealplans(updatedMealplan);
  };

  return (
    <div className={className + '__add-to-list'}>
      {/* <div className={className + '__add-to-list__list-container'}> */}
      <SelectMealplanDay ref={selectMealplanDayRef} className={className} />
      {/* </div> */}
      <GramInput
        ref={gramInputRef}
        className={className + '__add-to-list__gram-input'}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
      />
      <SelectMealplanMeal ref={selectMealplanMealRef} className={className} />
      <button
        className={className + '__add-to-list__add'}
        onClick={(e) => addProductToMeal(e)}
      >
        Legg til
      </button>
    </div>
  );
};

export default AddToMealplan;
