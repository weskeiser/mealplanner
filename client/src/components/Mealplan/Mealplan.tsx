import { FC } from 'react';
import { IMealplans } from '../../Interfaces/Mealplans';
import Mealplans from './Mealplans/Mealplans';

interface IMealplan {
  mealPlans: IMealplans[];
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
}

const Mealplan: FC<IMealplan> = ({ mealPlans, setMealPlans }) => {
  return (
    <>
      <h2 className="mealPlan__title">Ukeplan</h2>
      <hr className="mealPlan__divider--upper dividers" />
      <Mealplans mealPlans={mealPlans} setMealPlans={setMealPlans} />
    </>
  );
};

export default Mealplan;
