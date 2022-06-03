import { FC } from 'react';
import { IMealplans } from '../../../../../Interfaces/Mealplans';
import Meal from './Meal/Meal';

interface IMeals {
  mealPlan: IMealplans;
  mealPlans: IMealplans[];
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
  visible: boolean;
}

const Meals: FC<IMeals> = ({ mealPlan, mealPlans, setMealPlans, visible }) => {
  return (
    <>
      {visible && (
        <section className="mealPlan__meals">
          <Meal
            mealPlan={mealPlan}
            mealPlans={mealPlans}
            setMealPlans={setMealPlans}
          />
        </section>
      )}
    </>
  );
};

export default Meals;
