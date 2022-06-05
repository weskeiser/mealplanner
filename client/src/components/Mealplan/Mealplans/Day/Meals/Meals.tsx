import { Dispatch, FC, SetStateAction } from 'react';
import { IMealplans } from '../../../../../Interfaces/Mealplans';
import Meal from './Meal/Meal';

interface MealsProps {
  mealPlan: IMealplans;
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<SetStateAction<IMealplans[]>>;
  visible: boolean;
}

const Meals: FC<MealsProps> = ({
  mealPlan,
  mealPlans,
  setMealPlans,
  visible,
}) => {
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
