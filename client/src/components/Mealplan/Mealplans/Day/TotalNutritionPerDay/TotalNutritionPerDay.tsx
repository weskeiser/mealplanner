import { FC } from 'react';
import { IMealplans } from '../../../../../Interfaces/Mealplans';
import Nutrients from '../../../../common/Nutrients/Nutrients';
import getDailyTotalNutrition from '../helpers/getDailyTotalNutrition';

interface TotalNutritionPerDayProps {
  visible: boolean;
  mealPlan: IMealplans;
}

const TotalNutritionPerDay: FC<TotalNutritionPerDayProps> = ({
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
            <Nutrients
              className="mealPlan__total"
              selectedProduct={getDailyTotalNutrition(mealPlan)}
              totalServingTitle={'Totalt'}
            />
          </section>
        </>
      )}
    </>
  );
};

export default TotalNutritionPerDay;
