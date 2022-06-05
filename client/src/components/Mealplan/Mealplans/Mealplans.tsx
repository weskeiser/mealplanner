import { Dispatch, FC, SetStateAction } from 'react';
import { IMealplans } from '../../../Interfaces/Mealplans';
import Day from './Day/Day';

interface MealplansProps {
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<SetStateAction<IMealplans[]>>;
}

const Mealplans: FC<MealplansProps> = ({ mealPlans, setMealPlans }) => {
  return (
    <>
      {mealPlans.map((mealPlan) => (
        <Day
          mealPlan={mealPlan}
          mealPlans={mealPlans}
          setMealPlans={setMealPlans}
          key={mealPlan.listName}
        />
      ))}
    </>
  );
};

export default Mealplans;
