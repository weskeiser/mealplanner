import { FC, useState } from 'react';
import { IMealplans } from '../../../../Interfaces/Mealplans';
import Header from './Header/Header';
import Meals from './Meals/Meals';
import TotalNutritionPerDay from './TotalNutritionPerDay/TotalNutritionPerDay';

interface IDay {
  mealPlan: IMealplans;
  mealPlans: IMealplans[];
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
}

const Day: FC<IDay> = ({ mealPlan, mealPlans, setMealPlans }) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <section className="mealPlan">
        <Header mealPlan={mealPlan} visible={visible} setVisible={setVisible} />

        <Meals
          visible={visible}
          mealPlan={mealPlan}
          mealPlans={mealPlans}
          setMealPlans={setMealPlans}
        />

        <TotalNutritionPerDay visible={visible} mealPlan={mealPlan} />
      </section>

      <hr className="mealPlan__header__divider--lower dividers" />
    </>
  );
};

export default Day;
