import { useState } from 'react';
import { IMealplans } from '../../Interfaces/Mealplans';
import MealplanMeal from '../MealplanMeal/MealplanMeal';

interface IMealplanDay {
  mealPlan: IMealplans;
  mealPlans: IMealplans[];
  setMealplans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
}

const MealplanDay = ({ mealPlan, mealPlans, setMealplans }: IMealplanDay) => {
  const [hidden, setHidden] = useState<Boolean>(false);

  const openList = () => {
    setHidden(!hidden);
  };

  const toggleHidden = hidden ? 'hidden' : '';
  return (
    <>
      <div className="mealPlan__day">
        <h2 className="mealPlan__day__title">{mealPlan.listName}</h2>
        <div className="mealPlan__day__arrow__outter" onClick={openList}>
          <div className="mealPlan__day__arrow__inner"></div>
        </div>
      </div>

      {/* <hr /> */}

      <div className={toggleHidden}>
        <MealplanMeal
          mealPlan={mealPlan}
          mealPlans={mealPlans}
          setMealplans={setMealplans}
        />
      </div>

      <hr className="mealPlan__day__divider--lower dividers" />
    </>
  );
};

export default MealplanDay;
