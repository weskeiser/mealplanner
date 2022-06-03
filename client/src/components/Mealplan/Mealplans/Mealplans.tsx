import { FC } from 'react';
import { IMealplans } from '../../../Interfaces/Mealplans';
import Day from './Day/Day';

interface IMealplan {
  mealPlans: IMealplans[];
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
}

const Mealplans: FC<IMealplan> = ({ mealPlans, setMealPlans }) => {
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
