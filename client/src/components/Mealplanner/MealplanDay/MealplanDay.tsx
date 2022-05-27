import { FC, useState } from 'react';
import { IMeal, IMealplans } from '../../../Interfaces/Mealplans';
import MealplanMeal from './MealplanMeal/MealplanMeal';

interface IMealplanDay {
  mealPlan: IMealplans;
  mealPlans: IMealplans[];
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
}

const MealplanDay: FC<IMealplanDay> = ({
  mealPlan,
  mealPlans,
  setMealPlans,
}) => {
  const [visible, setVisible] = useState<Boolean>(false);

  const openList = () => {
    setVisible(!visible);
  };

  const mealPlanMeals = mealPlan.meals.map((meal: IMeal, mealIndex) => (
    <MealplanMeal
      key={mealPlan.listName + meal.listName}
      mealPlan={mealPlan}
      mealPlans={mealPlans}
      setMealPlans={setMealPlans}
      meal={meal}
      mealIndex={mealIndex}
    />
  ));

  const arrowOrLine = visible
    ? 'mealPlan__day__arrow__inner mealPlan__day__arrow__inner__make-line'
    : 'mealPlan__day__arrow__inner';

  return (
    <>
      <div className="mealPlan__day">
        <h2 className="mealPlan__day__title">{mealPlan.listName}</h2>
        <div className="mealPlan__day__arrow__outter" onClick={openList}>
          <div className={arrowOrLine}></div>
        </div>
      </div>

      {visible && <>{mealPlanMeals}</>}
      {/* {visible && <p>totalt</p>} */}

      <hr className="mealPlan__day__divider--lower dividers" />
    </>
  );
};

export default MealplanDay;
