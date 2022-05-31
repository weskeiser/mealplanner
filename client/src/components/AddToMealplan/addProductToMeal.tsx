import { Dispatch, MouseEvent } from 'react';
import { IMealplans } from '../../Interfaces/Mealplans';
import { IProducts } from '../../Interfaces/Products';

const addProductToMeal = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  selectedProduct: IProducts,
  mealPlans: IMealplans[],
  setMealPlans: Dispatch<React.SetStateAction<IMealplans[]>>,
  setExistsErrorMessage: Dispatch<React.SetStateAction<string>>
) => {
  e.preventDefault();
  setExistsErrorMessage('');

  const mealOptions = e.target.form.selectMeal.children;
  const dayOptions = e.target.form.selectDay.children;
  console.log(dayOptions);

  let mealPlanDayNames: Array<string> = [];
  let mealPlanMealNames: Array<string> = [];

  for (let option of dayOptions) {
    const checkBoxInput = option.children.checkBoxInput;
    if (checkBoxInput.checked) {
      mealPlanDayNames.push(checkBoxInput.value);
    }
  }

  for (let option of mealOptions) {
    const checkBoxInput = option.children.checkBoxInput;
    if (checkBoxInput.checked) {
      mealPlanMealNames.push(checkBoxInput.value);
    }
  }

  const addButton = e.target as HTMLButtonElement;
  // const mealPlanDayNames = (addButton.form as HTMLFormElement).selectDay.value;
  // const mealPlanMealNames = (addButton.form as HTMLFormElement).selectMeal.value;

  const newProduct = (dayName, mealName) => {
    return {
      ...selectedProduct,
      mealPlanDayName: dayName,
      mealPlanMealName: mealName,
    };
  };

  let returnIfExists = false;
  const updatedMealPlans: IMealplans[] = mealPlans.map((mealPlan) => {
    const alreadyExists = mealPlan.meals.some((meal) => {
      return meal.products.some((product) => {
        const dayMatches = mealPlanDayNames.some(
          (name) => name === product.mealPlanDayName
        );
        const mealMatches = mealPlanMealNames.some(
          (name) => name === product.mealPlanMealName
        );

        const uniqueProduct = product.id + product.properties.serving;
        const uniqueNewProduct =
          selectedProduct.id + selectedProduct.properties.serving;

        return uniqueProduct === uniqueNewProduct && dayMatches && mealMatches;
      });
    });

    if (alreadyExists) {
      returnIfExists = true;
      return;
    }

    return mealPlanDayNames.map((dayName) => {
      if (mealPlan.listName === dayName) {
        return {
          ...mealPlan,
          meals: [
            ...mealPlan.meals,
            mealPlan.meals.map((meal) => {
              return mealPlanMealNames.map((mealName) => {
                if (meal.listName === mealName) {
                  return {
                    ...meal,
                    products: [...meal.products, newProduct(dayName, mealName)],
                  };
                }
                return meal;
              });
              // return meal;
            }),
          ],
        };
      }
      return mealPlan;
    });
  });

  console.log(updatedMealPlans);
  console.log(mealPlans);

  if (returnIfExists) {
    setExistsErrorMessage(
      `${selectedProduct.name}, ${selectedProduct.properties.serving}g eksisterer allerede i listen.`
    );
    return;
  }

  setMealPlans(updatedMealPlans);
};

export default addProductToMeal;
