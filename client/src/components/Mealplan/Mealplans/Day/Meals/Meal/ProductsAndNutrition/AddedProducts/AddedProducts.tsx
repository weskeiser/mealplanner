import { Dispatch, FC, SetStateAction } from 'react';
import {
  IMeal,
  IMealplans,
} from '../../../../../../../../Interfaces/Mealplans';
import { IProducts } from '../../../../../../../../Interfaces/Products';
import ListItem from '../../../../../../../common/ListItem';
import AddedProduct from './AddedProduct/AddedProduct';
import RemoveButton from './RemoveButton/RemoveButton';

interface AddedProductsProps {
  meal: IMeal;
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<SetStateAction<IMealplans[]>>;
  prodAndNutrClass: string;
}

const AddedProducts: FC<AddedProductsProps> = ({
  meal,
  mealPlans,
  setMealPlans,
  prodAndNutrClass,
}) => {
  const addedProducts = meal.products;

  return (
    <>
      <ul className={prodAndNutrClass}>
        {addedProducts.map(
          (
            {
              name,
              properties,
              mealPlanDayName,
              mealPlanMealName,
              description,
            }: IProducts,
            index
          ) => (
            <ListItem
              className={prodAndNutrClass + '__product'}
              key={
                (mealPlanDayName as string) +
                mealPlanMealName +
                name +
                properties.serving
              }
            >
              <>
                <AddedProduct
                  prodAndNutrClass={prodAndNutrClass}
                  name={name}
                  properties={properties}
                  description={description}
                />
                <RemoveButton
                  prodAndNutrClass={prodAndNutrClass}
                  index={index}
                  mealPlans={mealPlans}
                  meal={meal}
                  setMealPlans={setMealPlans}
                  mealPlanDayName={mealPlanDayName as string}
                />
              </>
            </ListItem>
          )
        )}
      </ul>
    </>
  );
};

export default AddedProducts;
