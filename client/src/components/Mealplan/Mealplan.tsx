import Imealplans from '../../Interfaces/Mealplans';
import MealplanDay from '../MealplanDay/MealplanDay';

interface IMealplan {
  mealplans: Imealplans[];
}

const Mealplan = ({ mealplans }: IMealplan) => {
  const allMealplans = mealplans.map((mealplan) => (
    <MealplanDay mealplan={mealplan} />
  ));

  return <>{allMealplans}</>;
};

export default Mealplan;
