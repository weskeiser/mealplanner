import { useState } from 'react';
import { IMealPlansD } from '../../Interfaces/MealPlans';
import MealPlanMeal from '../MealPlanMeal/MealPlanMeal';

const MealPlanDay = ({ mealPlan, mealPlans, setMealPlans }: IMealPlansD) => {
  const [hidden, setHidden] = useState<Boolean>(true);

  const openList = () => {
    setHidden(!hidden);
  };

  const decideVisibility = hidden ? 'hidden' : '';
  return (
    <>
      <div className="mealPlan__day">
        <h2 className="mealPlan__day__title">{mealPlan.listName}</h2>
        <div className="mealPlan__day__arrow__outter" onClick={openList}>
          <div className="mealPlan__day__arrow__inner"></div>
        </div>
      </div>

      <div className={decideVisibility}>
        <MealPlanMeal
          mealPlan={mealPlan}
          mealPlans={mealPlans}
          setMealPlans={setMealPlans}
        />
      </div>

      <hr className="mealPlan__day__divider--lower dividers" />
    </>
  );
};

export default MealPlanDay;
