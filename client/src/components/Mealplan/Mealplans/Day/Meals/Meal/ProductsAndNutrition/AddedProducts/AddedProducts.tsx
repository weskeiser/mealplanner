import { FC } from 'react';
import {
  IMeal,
  IMealplans,
} from '../../../../../../../../Interfaces/Mealplans';
import { IProducts } from '../../../../../../../../Interfaces/Products';
import ListItem from '../../../../../../../ListItem';
import AddedProduct from './AddedProduct/AddedProduct';
import RemoveButton from './RemoveButton/RemoveButton';

interface IAddedProducts {
  meal: IMeal;
  mealPlans: IMealplans[];
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
  productsAndNutritionC: string;
}

const AddedProducts: FC<IAddedProducts> = ({
  meal,
  mealPlans,
  setMealPlans,
  productsAndNutritionC,
}) => {
  const addedProducts = meal.products;

  return (
    <>
      <ul className={productsAndNutritionC}>
        {addedProducts.map(
          (
            { name, properties, mealPlanDayName, mealPlanMealName }: IProducts,
            index
          ) => (
            <ListItem
              className={productsAndNutritionC + '__product'}
              key={
                (mealPlanDayName as string) +
                mealPlanMealName +
                name +
                properties.serving
              }
              children={
                <>
                  <AddedProduct
                    productsAndNutritionC={productsAndNutritionC}
                    name={name}
                    properties={properties}
                  />
                  <RemoveButton
                    productsAndNutritionC={productsAndNutritionC}
                    index={index}
                    mealPlans={mealPlans}
                    meal={meal}
                    setMealPlans={setMealPlans}
                    mealPlanDayName={mealPlanDayName}
                  />
                </>
              }
            />
          )
        )}
      </ul>
    </>
  );
};

export default AddedProducts;
