import {
  IMealplans,
  IMeal,
} from '../../../../../../../../../Interfaces/Mealplans';

const removeProduct = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  mealPlans: IMealplans[],
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>,
  meal: IMeal,
  mealPlanDayName: string
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

export default removeProduct;
