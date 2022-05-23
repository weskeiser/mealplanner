import { IMeal, IMealplans } from '../../Interfaces/Mealplans';
import { IProducts } from '../../Interfaces/Products';

interface IAddedProducts {
  meal: IMeal;
  mealPlans: IMealplans[];
  setMealplans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
  mealPlanDayName: string;
}

const AddedProducts = ({
  meal,
  mealPlans,
  setMealplans,
  mealPlanDayName,
}: IAddedProducts) => {
  const removeProductFromMeal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log(mealPlans);

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
    setMealplans(updatedMealplan);
  };

  return (
    <>
      {meal.products.map(({ name, properties }: IProducts, index) => (
        <div className="added-products__product">
          <p className="added-products__product__title">
            {name},{' '}
            <span className="added-products__product__title__brand">
              {properties.brand}
            </span>
          </p>
          <div className="added-products__product__serving-remove-container">
            <p className="added-products__product__serving">
              {properties.serving}g
            </p>
            <button
              className="added-products__product__remove"
              data-index={index}
              onClick={(e) => removeProductFromMeal(e)}
            >
              &#10005;
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AddedProducts;
