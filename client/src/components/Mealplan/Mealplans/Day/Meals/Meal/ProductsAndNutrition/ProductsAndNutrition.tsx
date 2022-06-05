import { Dispatch, FC, SetStateAction } from 'react';
import { IMeal, IMealplans } from '../../../../../../../Interfaces/Mealplans';
import NutritionList from '../../../../../../NutritionList/NutritionList';
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

          <NutritionList
            className={prodAndNutrClass}
            selectedProduct={mealTotalNutrition}
            totalServing={'Totalt'}
          />
        </>
      )}
    </>
  );
};

export default ProductsAndNutrition;
