import { IMealplans } from '../../Interfaces/Mealplans';
import { IProducts } from '../../Interfaces/Products';

const addProductToMeal = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  selectedProduct: IProducts,
  mealPlans: IMealplans[],
  setMealplans: React.Dispatch<React.SetStateAction<IMealplans[]>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  selectMealplanMealRef: React.MutableRefObject<undefined>,
  selectMealplanDayRef: React.MutableRefObject<undefined>
) => {
  e.preventDefault();
  setErrorMessage('');

  const mealPlanDayName = selectMealplanDayRef.current.value;
  const mealPlanMealName = selectMealplanMealRef.current.value;

  const newProduct = {
    ...selectedProduct,
    mealplanDayName: mealPlanDayName,
    mealplanMealName: mealPlanMealName,
  };

  const updatedMealPlans = mealPlans.map((mealPlan) => {
    const alreadyExists = mealPlan.meals.some((meal) => {
      return meal.products.some((product) => {
        const uniqueProduct =
          product.id +
          product.properties.serving +
          product.mealplanDayName +
          product.mealplanMealName;

        const uniqueNewProduct =
          newProduct.id +
          newProduct.properties.serving +
          newProduct.mealplanDayName +
          newProduct.mealplanMealName;
        return uniqueProduct === uniqueNewProduct;
      });
    });

    if (alreadyExists) {
      setErrorMessage(
        `${newProduct.name}, ${newProduct.properties.serving}g eksisterer allerede i listen.`
      );
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

export default addProductToMeal;
