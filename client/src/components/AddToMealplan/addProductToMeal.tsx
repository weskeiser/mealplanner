import { IMealplans } from '../../Interfaces/Mealplans';
import { IProducts } from '../../Interfaces/Products';

const addProductToMeal = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  selectedProduct: IProducts,
  mealPlans: IMealplans[],
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  selectMealplanMealRef: React.MutableRefObject<HTMLSelectElement | undefined>,
  selectMealplanDayRef: React.MutableRefObject<HTMLSelectElement | undefined>
) => {
  e.preventDefault();
  setErrorMessage('');

  const mealPlanDayName = selectMealplanDayRef.current.value;
  const mealPlanMealName = selectMealplanMealRef.current.value;

  const newProduct = {
    ...selectedProduct,
    mealPlanDayName: mealPlanDayName,
    mealPlanMealName: mealPlanMealName,
  };

  let returnIfExists = false;
  const updatedMealPlans = mealPlans.map((mealPlan) => {
    const alreadyExists = mealPlan.meals.some((meal) => {
      return meal.products.some((product) => {
        const uniqueProduct =
          product.id +
          product.properties.serving +
          product.mealPlanDayName +
          product.mealPlanMealName;
        const uniqueNewProduct =
          newProduct.id +
          newProduct.properties.serving +
          newProduct.mealPlanDayName +
          newProduct.mealPlanMealName;

        return uniqueProduct === uniqueNewProduct;
      });
    });

    if (alreadyExists) {
      returnIfExists = true;
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

  if (returnIfExists) {
    setErrorMessage(
      `${newProduct.name}, ${newProduct.properties.serving}g eksisterer allerede i listen.`
    );
    setMealPlans(mealPlans);
    return;
  }

  setMealPlans(updatedMealPlans);
};

export default addProductToMeal;
