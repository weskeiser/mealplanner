import { useState } from 'react';
import { IMeal, IMealPlansD } from '../../Interfaces/MealPlans';
import AddedProducts from '../AddedProducts/AddedProducts';

const MealPlanMeal = ({ mealPlan, mealPlans, setMealPlans }: IMealPlansD) => {
  const [hidden, setHidden] = useState<Boolean>(true);

  const openList = () => {
    setHidden(!hidden);
  };

  const decideVisibility = hidden ? 'hidden' : '';

  return (
    <>
      <div className="mealPlan__meal">
        <h3 className="mealPlan__meal__title">Måltid 1</h3>
        <div className="mealPlan__meal__arrow__outter" onClick={openList}>
          <div className="mealPlan__meal__arrow__inner"></div>
        </div>
      </div>
      <div className={decideVisibility}>
        {mealPlan.meals.map((meal: IMeal) => (
          <AddedProducts
            meal={meal}
            mealPlanDayName={mealPlan.listName}
            mealPlans={mealPlans}
            setMealPlans={setMealPlans}
          />
        ))}
      </div>
    </>
  );
};

export default MealPlanMeal;
