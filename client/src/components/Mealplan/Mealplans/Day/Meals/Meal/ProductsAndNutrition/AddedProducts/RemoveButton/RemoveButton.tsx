import { FC } from 'react';
import {
  IMeal,
  IMealplans,
} from '../../../../../../../../../Interfaces/Mealplans';
import removeProduct from './removeProduct';

interface IRemoveButton {
  meal: IMeal;
  mealPlans: IMealplans[];
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
  prodAndNutrClass: string;
  index: number;
  mealPlanDayName: string;
}

const RemoveButton: FC<IRemoveButton> = ({
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
