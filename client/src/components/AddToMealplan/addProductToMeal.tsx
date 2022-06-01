import { Dispatch, MouseEvent } from 'react';
import { IMealplans } from '../../Interfaces/Mealplans';
import { IProducts } from '../../Interfaces/Products';

const addProductToMeal = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  selectedProduct: IProducts,
  mealPlans: IMealplans[],
  setMealPlans: Dispatch<React.SetStateAction<IMealplans[]>>,
  setUnsuccessfulAdditions: Dispatch<React.SetStateAction<string[] | never[]>>,
  setSuccessfulAdditions: Dispatch<React.SetStateAction<string[] | never[]>>
) => {
  e.preventDefault();
  setUnsuccessfulAdditions([]);
  setSuccessfulAdditions([]);

  const mealOptions = e.target.form.children.selectMeal.children;
  const dayOptions = e.target.form.children.selectDay.children;

  let mealPlanDayNames: Array<string> = [];
  let mealPlanMealNames: Array<string> = [];

  for (let option of dayOptions) {
    if (option.children.checkBoxInput) {
      const checkBoxInput = option.children.checkBoxInput;
      if (checkBoxInput.checked) {
        mealPlanDayNames.push(checkBoxInput.value);
      }
    }
  }

  for (let option of mealOptions) {
    if (option.children.checkBoxInput) {
      const checkBoxInput = option.children.checkBoxInput;
      if (checkBoxInput.checked) {
        mealPlanMealNames.push(checkBoxInput.value);
      }
    }
  }

  let showError: string | number | never[] = [];
  let showSuccess: string | number | never[] = [];
  const updatedMealPlans = mealPlans.map((mealPlan) => {
    if (mealPlanDayNames.includes(mealPlan.listName)) {
      return {
        ...mealPlan,
        meals: mealPlan.meals.map((meal) => {
          const productExists = meal.products.some((product) => {
            const existingProduct = product.id + product.properties.serving;
            const newProduct =
              selectedProduct.id + selectedProduct.properties.serving;

            return existingProduct === newProduct;
          });

          if (mealPlanMealNames.includes(meal.listName)) {
            if (productExists) {
              showError.push([
                mealPlan.listName,
                meal.listName,
                selectedProduct.properties.serving,
              ]);
              return meal;
            }
            showSuccess.push([
              mealPlan.listName,
              meal.listName,
              selectedProduct.properties.serving,
            ]);

            return {
              ...meal,
              products: [...meal.products, selectedProduct],
            };
          }
          return meal;
        }),
      };
    }
    return mealPlan;
  });

  setSuccessfulAdditions(showSuccess);
  if (showError.length !== 0) {
    setUnsuccessfulAdditions(showError);
  }

  setMealPlans(updatedMealPlans);
};

export default addProductToMeal;
