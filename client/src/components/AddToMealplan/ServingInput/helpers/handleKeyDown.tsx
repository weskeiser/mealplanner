import { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import { IMealplans } from '../../../../Interfaces/Mealplans';
import { IProducts } from '../../../../Interfaces/Products';
import addProductToMeal from '../../helpers/addProductToMeal';
const handleKeyDown = (
  e: KeyboardEvent<HTMLInputElement>,
  selectedProduct: IProducts,
  mealPlans: IMealplans[],
  setMealPlans: Dispatch<SetStateAction<IMealplans[]>>,
  setUnsuccessfulAdditions: Dispatch<SetStateAction<string[] | never[]>>,
  setSuccessfulAdditions: Dispatch<SetStateAction<string[] | never[]>>
) => {
  if (e.key === 'Enter') {
    addProductToMeal(
      e,
      selectedProduct,
      mealPlans,
      setMealPlans,
      setUnsuccessfulAdditions,
      setSuccessfulAdditions
    );
  }

  if (e.key === 'Tab') {
    return;
  }

  if (e.key === 'Backspace') {
    return;
  }

  if (e.key === 'Escape') {
    (e.target as HTMLInputElement).blur();
  }

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (parseInt(e.key) !== numbers[parseInt(e.key)]) {
    e.preventDefault();
  }
};

export default handleKeyDown;
