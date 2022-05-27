import { FC, useState } from 'react';
import { IMeal, IMealplans } from '../../../../Interfaces/Mealplans';
import AddedProducts from './AddedProducts/AddedProducts';

interface IMealplanMeal {
  mealIndex: number;
  meal: IMeal;
  mealPlan: IMealplans;
  mealPlans: IMealplans[];
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
}

const MealplanMeal: FC<IMealplanMeal> = ({
  meal,
  mealIndex,
  mealPlan,
  mealPlans,
  setMealPlans,
}) => {
  const [visible, setVisible] = useState<Boolean>(true);

  const openList = () => {
    setVisible(!visible);
  };

  const firstHrWider = (index: number): string => {
    return index === 0
      ? 'mealPlan__meal__divider--upper dividers wide'
      : 'mealPlan__meal__divider--upper dividers';
  };

  const arrowOrLine = visible
    ? 'mealPlan__meal__arrow__inner mealPlan__meal__arrow__inner__make-line'
    : 'mealPlan__meal__arrow__inner';

  return (
    <>
      <hr className={firstHrWider(mealIndex)} />
      <div className="mealPlan__meal">
        <h3 className="mealPlan__meal__title">{meal.listName}</h3>
        <div className="mealPlan__meal__arrow__outter" onClick={openList}>
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
    </>
  );
};

export default MealplanMeal;
