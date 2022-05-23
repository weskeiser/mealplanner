import { IMealplans } from '../../Interfaces/Mealplans';
import MealplanDay from '../MealplanDay/MealplanDay';

interface IMealplan {
  mealPlans: IMealplans[];
  setMealplans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
}

const Mealplan = ({ mealPlans, setMealplans }: IMealplan) => {
  const allMealplans = mealPlans.map((mealPlan) => (
    <MealplanDay
      mealPlan={mealPlan}
      mealPlans={mealPlans}
      setMealplans={setMealplans}
    />
  ));

  return <>{allMealplans}</>;
};

export default Mealplan;
