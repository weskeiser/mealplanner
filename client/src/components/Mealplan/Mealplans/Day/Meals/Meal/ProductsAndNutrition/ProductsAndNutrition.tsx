import { FC } from 'react';
import { IMeal, IMealplans } from '../../../../../../../Interfaces/Mealplans';
import NutritionList from '../../../../../../NutritionList/NutritionList';
import getTotalNutrition from '../../../getTotalNutrition';
import AddedProducts from './AddedProducts/AddedProducts';

interface IProductsAndNutrition {
  meal: IMeal;
  mealPlans: IMealplans[];
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
}

const ProductsAndNutrition: FC<IProductsAndNutrition> = ({
  meal,
  mealPlans,
  setMealPlans,
}) => {
  const mealTotalNutrition = getTotalNutrition(meal.products, meal.listName);

  const prodAndNutrClass = 'mealPlan__meals__meal__products-and-nutrition';

  return (
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
  );
};

export default ProductsAndNutrition;