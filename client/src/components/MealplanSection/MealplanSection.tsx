import {
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  useState,
} from 'react';
import { IMealplans } from '../../Interfaces/Mealplans';
import { IProducts } from '../../Interfaces/Products';
import AddToMealplan from '../AddToMealplan/AddToMealplan';
import daysOfTheWeek from '../helpers/daysOfTheWeek';
import Mealplan from '../Mealplan/Mealplan';

export interface MealPlanSectionProps {
  selectedProduct: IProducts;
  setSelectedProduct: Dispatch<SetStateAction<IProducts>>;
  servingInputRef: MutableRefObject<HTMLInputElement | undefined>;
  selectedProductOriginalServing: IProducts | {};
  setSelectedProductOriginalServing: Dispatch<SetStateAction<IProducts>>;
}

const MealplanSection: FC<MealPlanSectionProps> = ({
  selectedProduct,
  setSelectedProduct,
  selectedProductOriginalServing,
  setSelectedProductOriginalServing,
  servingInputRef,
}) => {
  const [mealPlans, setMealPlans] = useState<IMealplans[]>(
    daysOfTheWeek.map((day) => ({
      listName: `${day}`,
      meals: [
        {
          listName: 'Måltid 1',
          products: [],
        },
        {
          listName: 'Måltid 2',
          products: [],
        },
        {
          listName: 'Måltid 3',
          products: [],
        },
      ],
    }))
  );

  return (
    <>
      <AddToMealplan
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        mealPlans={mealPlans}
        setMealPlans={setMealPlans}
        servingInputRef={servingInputRef}
        selectedProductOriginalServing={selectedProductOriginalServing}
        setSelectedProductOriginalServing={setSelectedProductOriginalServing}
      />
      <Mealplan mealPlans={mealPlans} setMealPlans={setMealPlans} />
    </>
  );
};

export default MealplanSection;
