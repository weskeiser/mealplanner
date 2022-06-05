import { Dispatch, FC, SetStateAction, useState } from 'react';
import { IMeal, IMealplans } from '../../../../../../Interfaces/Mealplans';
import Header from './Header/Header';
import ProductsAndNutrition from './ProductsAndNutrition/ProductsAndNutrition';

interface MealProps {
  mealPlan: IMealplans;
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<SetStateAction<IMealplans[]>>;
}

const MealplanMeal: FC<MealProps> = ({ mealPlan, mealPlans, setMealPlans }) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {mealPlan.meals.map((meal: IMeal) => (
        <section
          className="mealPlan__meals__meal"
          key={mealPlan.listName + meal.listName}
          title={mealPlan.listName + ', ' + meal.listName}
        >
          <Header meal={meal} visible={visible} setVisible={setVisible} />
          <ProductsAndNutrition
            key={mealPlan.listName + meal.listName}
            meal={meal}
            mealPlans={mealPlans}
            setMealPlans={setMealPlans}
            visible={visible}
          />
        </section>
      ))}
    </>
  );
};

export default MealplanMeal;
