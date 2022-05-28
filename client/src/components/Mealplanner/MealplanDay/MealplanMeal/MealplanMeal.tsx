import { FC, useState } from 'react';
import { IMeal, IMealplans } from '../../../../Interfaces/Mealplans';
import AddedProducts from './AddedProducts/AddedProducts';

interface IMealplanMeal {
  meal: IMeal;
  mealPlan: IMealplans;
  mealPlans: IMealplans[];
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
}

const MealplanMeal: FC<IMealplanMeal> = ({
  meal,
  mealPlan,
  mealPlans,
  setMealPlans,
}) => {
  const [visible, setVisible] = useState<Boolean>(true);

  const openList = () => {
    setVisible(!visible);
  };

  const arrowOrLine = visible
    ? 'mealPlan__meal__title__toggle__inner mealPlan__meal__title__toggle__inner__make-line'
    : 'mealPlan__meal__title__toggle__inner';

  return (
    <div className="mealPlan__meal">
      <div className="mealPlan__meal__title">
        <h3 className="mealPlan__meal__title__name">{meal.listName}</h3>
        <div className="mealPlan__meal__title__toggle" onClick={openList}>
          <div className={arrowOrLine}></div>
        </div>
      </div>
      {visible && (
        <AddedProducts
          key={mealPlan.listName + meal.listName}
          meal={meal}
          mealPlanDayName={mealPlan.listName}
          mealPlans={mealPlans}
          setMealPlans={setMealPlans}
        />
      )}
    </div>
  );
};

export default MealplanMeal;
