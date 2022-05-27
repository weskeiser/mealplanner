import { FC } from 'react';
import { IMealplans } from '../../Interfaces/Mealplans';
import MealplanDay from './MealplanDay/MealplanDay';

interface IMealplan {
  mealPlans: IMealplans[];
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
}

const Mealplanner: FC<IMealplan> = ({ mealPlans, setMealPlans }) => {
  const allMealplans = mealPlans.map((mealPlan) => (
    <MealplanDay
      mealPlan={mealPlan}
      mealPlans={mealPlans}
      setMealPlans={setMealPlans}
      key={mealPlan.listName}
    />
  ));

  return <>{allMealplans}</>;
};

export default Mealplanner;
