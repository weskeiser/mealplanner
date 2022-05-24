import { useState } from 'react';
import { IMeal, IMealplans } from '../../Interfaces/Mealplans';
import AddedProducts from '../AddedProducts/AddedProducts';

interface IMealplanMeal {
  mealPlan: IMealplans;
  mealPlans: IMealplans[];
  setMealplans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
}

const MealplanMeal = ({ mealPlan, mealPlans, setMealplans }: IMealplanMeal) => {
  const [hidden, setHidden] = useState<Boolean>(false);

  const openList = () => {
    setHidden(!hidden);
  };

  const toggleHidden = hidden ? 'hidden' : '';

  return (
    <>
      <hr className="mealPlan__meal__divider--upper dividers" />
      <div className="mealPlan__meal">
        <h3 className="mealPlan__meal__title">Måltid 1</h3>
        <div className="mealPlan__meal__arrow__outter" onClick={openList}>
          <div className="mealPlan__meal__arrow__inner"></div>
        </div>
      </div>
      <div className={toggleHidden}>
        {mealPlan.meals.map((meal: IMeal) => (
          <AddedProducts
            meal={meal}
            mealPlanDayName={mealPlan.listName}
            mealPlans={mealPlans}
            setMealplans={setMealplans}
          />
        ))}
      </div>
    </>
  );
};

export default MealplanMeal;
