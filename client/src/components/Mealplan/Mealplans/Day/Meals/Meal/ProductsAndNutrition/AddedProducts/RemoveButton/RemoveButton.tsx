import { Dispatch, FC, SetStateAction } from 'react';
import {
  IMeal,
  IMealplans,
} from '../../../../../../../../../Interfaces/Mealplans';
import removeProduct from './helpers/removeProduct';

interface RemoveButtonProps {
  meal: IMeal;
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<SetStateAction<IMealplans[]>>;
  prodAndNutrClass: string;
  index: number;
  mealPlanDayName: string;
}

const RemoveButton: FC<RemoveButtonProps> = ({
  prodAndNutrClass,
  index,
  mealPlans,
  meal,
  setMealPlans,
  mealPlanDayName,
}) => {
  return (
    <button
      className={prodAndNutrClass + '__product__remove'}
      data-index={index}
      onClick={(e) =>
        removeProduct(e, mealPlans, setMealPlans, meal, mealPlanDayName)
      }
    >
      &#10005;
    </button>
  );
};

export default RemoveButton;
