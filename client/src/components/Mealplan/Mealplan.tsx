import { IMealPlans } from '../../Interfaces/MealPlans';
import MealPlanDay from '../MealPlanDay/MealPlanDay';

interface IMealPlan {
  mealPlans: IMealPlans[];
  setMealPlans: React.Dispatch<React.SetStateAction<IMealPlan[]>>;
}

const MealPlan = ({ mealPlans, setMealPlans }: IMealPlan) => {
  const allMealPlans = mealPlans.map((mealPlan) => (
    <MealPlanDay
      mealPlan={mealPlan}
      mealPlans={mealPlans}
      setMealPlans={setMealPlans}
    />
  ));

  return <>{allMealPlans}</>;
};

export default MealPlan;
