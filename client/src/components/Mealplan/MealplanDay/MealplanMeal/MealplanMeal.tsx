import { FC, useState } from 'react';
import { IMeal, IMealplans } from '../../../../Interfaces/Mealplans';
import AddedProducts from './AddedProducts/AddedProducts';

interface IMealplanMeal {
  mealPlan: IMealplans;
  mealPlans: IMealplans[];
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
}

const MealplanMeal: FC<IMealplanMeal> = ({
  mealPlan,
  mealPlans,
  setMealPlans,
}) => {
  const [visible, setVisible] = useState<Boolean>(true);

  const openList = () => {
    setVisible(!visible);
  };

  return (
    <>
      <hr className="mealPlan__meal__divider--upper dividers" />
      <div className="mealPlan__meal">
        <h3 className="mealPlan__meal__title">Måltid 1</h3>
        <div className="mealPlan__meal__arrow__outter" onClick={openList}>
          <div className="mealPlan__meal__arrow__inner"></div>
        </div>
      </div>
      {visible && (
        <div>
          {mealPlan.meals.map((meal: IMeal) => (
            <AddedProducts
              key={mealPlan.listName + meal.listName}
              meal={meal}
              mealPlanDayName={mealPlan.listName}
              mealPlans={mealPlans}
              setMealPlans={setMealPlans}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MealplanMeal;
