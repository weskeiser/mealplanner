import { Dispatch, FC, SetStateAction } from 'react';
import { IMeal, IMealplans } from '../../../../../../../Interfaces/Mealplans';
import Nutrients from '../../../../../../common/Nutrients/Nutrients';
import getTotalNutrition from '../../../helpers/getTotalNutrition';
import AddedProducts from './AddedProducts/AddedProducts';

interface ProductsAndNutritionProps {
  meal: IMeal;
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<SetStateAction<IMealplans[]>>;
  visible: boolean;
}

const ProductsAndNutrition: FC<ProductsAndNutritionProps> = ({
  meal,
  mealPlans,
  setMealPlans,
  visible,
}) => {
  const mealTotalNutrition = getTotalNutrition(meal.products, meal.listName);

  const prodAndNutrClass = 'mealPlan__meals__meal__products-and-nutrition';

  return (
    <>
      {visible && (
        <>
          <AddedProducts
            meal={meal}
            mealPlans={mealPlans}
            setMealPlans={setMealPlans}
            prodAndNutrClass={prodAndNutrClass}
          />

          <Nutrients
            className={prodAndNutrClass}
            selectedProduct={{
              ...mealTotalNutrition,
              meal: meal,
            }}
            totalServingTitle={'Totalt'}
          />
        </>
      )}
    </>
  );
};

export default ProductsAndNutrition;
