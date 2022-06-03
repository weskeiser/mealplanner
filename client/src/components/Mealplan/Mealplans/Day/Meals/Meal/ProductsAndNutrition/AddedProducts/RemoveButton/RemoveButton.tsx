import { FC } from 'react';
import {
  IMeal,
  IMealplans,
} from '../../../../../../../../../Interfaces/Mealplans';

interface IRemoveButton {
  meal: IMeal;
  mealPlans: IMealplans[];
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
  productsAndNutritionC: string;
  index: number;
  mealPlanDayName: string;
}

const RemoveButton: FC<IRemoveButton> = ({
  productsAndNutritionC,
  index,
  mealPlans,
  meal,
  setMealPlans,
  mealPlanDayName,
}) => {
  const removeProduct = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const updatedMealplan = mealPlans.map((mealPlan) => {
      const mealPlanMealName = meal.listName;

      if (mealPlan.listName === mealPlanDayName) {
        return {
          ...mealPlan,
          meals: mealPlan.meals.map((meal) => {
            if (meal.listName === mealPlanMealName) {
              const productsWithItemRemoved = [...meal.products];
              productsWithItemRemoved.splice(e.target.dataset.index, 1);
              return {
                ...meal,
                products: productsWithItemRemoved,
              };
            }
            return meal;
          }),
        };
      }
      return mealPlan;
    });

    setMealPlans(updatedMealplan);
  };

  return (
    <button
      className={productsAndNutritionC + '__product__remove'}
      data-index={index}
      onClick={(e) => removeProduct(e)}
    >
      &#10005;
    </button>
  );
};

export default RemoveButton;
