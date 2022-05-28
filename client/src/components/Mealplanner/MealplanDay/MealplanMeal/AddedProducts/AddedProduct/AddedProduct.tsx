import { FC } from 'react';
import { IMeal, IMealplans } from '../../../../../../Interfaces/Mealplans';
import { IProducts } from '../../../../../../Interfaces/Products';
import ListItem from '../../../../../ListItem';

interface IAddedProducts {
  meal: IMeal;
  mealPlans: IMealplans[];
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
  mealPlanDayName: string;
  addedProductsClass: string;
}

const AddedProducts: FC<IAddedProducts> = ({
  meal,
  mealPlans,
  setMealPlans,
  mealPlanDayName,
  addedProductsClass,
}) => {
  const removeProductFromMeal = (
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
    <>
      {meal.products.map(
        (
          { name, properties, mealPlanDayName, mealPlanMealName }: IProducts,
          index
        ) => (
          <ListItem
            className={addedProductsClass + '__product'}
            key={mealPlanDayName + mealPlanMealName + name + properties.serving}
            children={
              <>
                <p className={addedProductsClass + '__product__title'}>
                  {name},{' '}
                  <span
                    className={addedProductsClass + '__product__title__brand'}
                  >
                    {properties.brand}
                  </span>
                </p>
                <div
                  className={
                    addedProductsClass + '__product__serving-remove-container'
                  }
                >
                  <p className={addedProductsClass + '__product__serving'}>
                    {properties.serving}g
                  </p>
                  <button
                    className={addedProductsClass + '__product__remove'}
                    data-index={index}
                    onClick={(e) => removeProductFromMeal(e)}
                  >
                    &#10005;
                  </button>
                </div>
              </>
            }
          />
        )
      )}
    </>
  );
};

export default AddedProducts;
