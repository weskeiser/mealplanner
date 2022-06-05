import { Dispatch, FC, SetStateAction } from 'react';
import { IMealplans } from '../../Interfaces/Mealplans';
import Mealplans from './Mealplans/Mealplans';

interface MealplanProps {
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<SetStateAction<IMealplans[]>>;
}

const Mealplan: FC<MealplanProps> = ({ mealPlans, setMealPlans }) => {
  return (
    <>
      <h2 className="mealPlan__title">Ukeplan</h2>
      <hr className="mealPlan__divider--upper dividers" />
      <Mealplans mealPlans={mealPlans} setMealPlans={setMealPlans} />
    </>
  );
};

export default Mealplan;
