import { IMealplans } from '../../Interfaces/Mealplans';
import { IProducts } from '../../Interfaces/Products';
import SelectMealplanDay from '../SelectMealplanDay/SelectMealplanDay';
import SelectMealplanMeal from '../SelectMealplanMeal/SelectMealplanMeal';
import GramInput from '../GramInput/GramInput';
import { FC, useRef, useState } from 'react';

interface IAddToMealplan {
  className: string;
  selectedProduct: IProducts;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProducts>>;
  mealPlans: IMealplans[];
  setMealplans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
  gramInputRef: React.MutableRefObject<undefined>;
  currentProduct: IProducts | {};
  setCurrentProduct: React.Dispatch<React.SetStateAction<IProducts>>;
}

const AddToMealplan: FC<IAddToMealplan> = ({
  className,
  selectedProduct,
  mealPlans,
  setMealplans,
  setSelectedProduct,
  currentProduct,
  setCurrentProduct,
  gramInputRef,
}) => {
  const selectMealplanDayRef = useRef();
  const selectMealplanMealRef = useRef();

  const [errorMessage, setErrorMessage] = useState(false);

  const addProductToMeal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const mealPlanDayName = selectMealplanDayRef.current.value;
    const mealPlanMealName = selectMealplanMealRef.current.value;

    const newProduct = {
      ...selectedProduct,
      mealplanDayName: selectMealplanDayRef.current.value,
      mealplanMealName: selectMealplanMealRef.current.value,
    };

    const updatedMealPlans = mealPlans.map((mealPlan) => {
      const alreadyExists = mealPlan.meals.some((meal) => {
        return meal.products.some((product) => {
          return (
            product.id + product.properties.serving ==
            newProduct.id + newProduct.properties.serving
          );
        });
      });

      if (alreadyExists) {
        return;
      }

      if (mealPlan.listName === mealPlanDayName) {
        return {
          ...mealPlan,
          meals: mealPlan.meals.map((meal) => {
            if (meal.listName === mealPlanMealName) {
              return {
                ...meal,
                products: [...meal.products, newProduct],
              };
            }
            return meal;
          }),
        };
      }
      return mealPlan;
    });

    if (updatedMealPlans[0] === undefined) {
      console.log('already exists');
      return;
    }
    setMealplans(updatedMealPlans);
  };

  return (
    <>
      <div className={className + '__add-to-list'}>
        <SelectMealplanDay ref={selectMealplanDayRef} className={className} />
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
      {true && <p>blabla</p>}
    </>
  );
};

export default AddToMealplan;
