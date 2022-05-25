import { FC, useState } from 'react';
import { IMealplans } from '../../Interfaces/Mealplans';
import MealplanMeal from '../MealplanMeal/MealplanMeal';

interface IMealplanDay {
  mealPlan: IMealplans;
  mealPlans: IMealplans[];
  setMealplans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
}

const MealplanDay: FC<IMealplanDay> = ({
  mealPlan,
  mealPlans,
  setMealplans,
}) => {
  const [visible, setVisible] = useState<Boolean>(true);

  const openList = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="mealPlan__day">
        <h2 className="mealPlan__day__title">{mealPlan.listName}</h2>
        <div className="mealPlan__day__arrow__outter" onClick={openList}>
          <div className="mealPlan__day__arrow__inner"></div>
        </div>
      </div>

      {visible && (
        <div className="">
          <MealplanMeal
            mealPlan={mealPlan}
            mealPlans={mealPlans}
            setMealplans={setMealplans}
          />
        </div>
      )}

      <hr className="mealPlan__day__divider--lower dividers" />
    </>
  );
};

export default MealplanDay;
