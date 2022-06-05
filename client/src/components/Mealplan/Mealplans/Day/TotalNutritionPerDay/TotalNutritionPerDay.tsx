import { FC } from 'react';
import { IMealplans } from '../../../../../Interfaces/Mealplans';
import NutritionList from '../../../../NutritionList/NutritionList';
import getDailyTotalNutrition from '../getDailyTotalNutrition';

interface ITotalNutritionPerDay {
  visible: boolean;
  mealPlan: IMealplans;
}

const TotalNutritionPerDay: FC<ITotalNutritionPerDay> = ({
  visible,
  mealPlan,
}) => {
  return (
    <>
      {visible && (
        <>
          <section
            className="mealPlan__total"
            title={'total nutrition for ' + mealPlan.listName}
          >
            <h3 className="mealPlan__total__title">
              {mealPlan.listName} - Alle Måltider
            </h3>
            <NutritionList
              className="mealPlan__total"
              selectedProduct={getDailyTotalNutrition(mealPlan)}
              totalServing={'Totalt'}
            />
          </section>
        </>
      )}
    </>
  );
};

export default TotalNutritionPerDay;