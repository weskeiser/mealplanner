import { FC } from 'react';
import { IMealplans } from '../../Interfaces/Mealplans';
import MealplanDay from '../MealplanDay/MealplanDay';

interface IMealplan {
  mealPlans: IMealplans[];
  setMealplans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
}

const Mealplan: FC<IMealplan> = ({ mealPlans, setMealplans }) => {
  const allMealplans = mealPlans.map((mealPlan) => (
    <MealplanDay
      mealPlan={mealPlan}
      mealPlans={mealPlans}
      setMealplans={setMealplans}
      key={mealPlan.listName}
    />
  ));

  return <>{allMealplans}</>;
};

export default Mealplan;
