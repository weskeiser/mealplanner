import { FC } from 'react';
import { IMeal, IMealplans } from '../../../../../../Interfaces/Mealplans';
import Header from './Header/Header';
import ProductsAndNutrition from './ProductsAndNutrition/ProductsAndNutrition';

interface IMealLocal {
  mealPlan: IMealplans;
  mealPlans: IMealplans[];
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
}

const MealplanMeal: FC<IMealLocal> = ({
  mealPlan,
  mealPlans,
  setMealPlans,
}) => {
  return (
    <>
      {mealPlan.meals.map((meal: IMeal) => (
        <section
          className="mealPlan__meals__meal"
          key={mealPlan.listName + meal.listName}
          title={mealPlan.listName + ', ' + meal.listName}
        >
          <Header meal={meal} />
          <ProductsAndNutrition
            key={mealPlan.listName + meal.listName}
            meal={meal}
            mealPlans={mealPlans}
            setMealPlans={setMealPlans}
          />
        </section>
      ))}
    </>
  );
};

export default MealplanMeal;
