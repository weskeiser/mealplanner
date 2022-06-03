import { Dispatch, FC, SetStateAction } from 'react';
import { IMealplans } from '../../../Interfaces/Mealplans';
import { IProducts } from '../../../Interfaces/Products';
import addProductToMeal from '../addProductToMeal';

interface ISubmitButton {
  className: string;
  selectedProduct: IProducts;
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<SetStateAction<IMealplans[]>>;
  setUnsuccessfulAdditions: Dispatch<SetStateAction<string[] | never[]>>;
  setSuccessfulAdditions: Dispatch<SetStateAction<string[] | never[]>>;
}

const SubmitButton: FC<ISubmitButton> = ({
  className,
  selectedProduct,
  mealPlans,
  setMealPlans,
  setUnsuccessfulAdditions,
  setSuccessfulAdditions,
}) => {
  return (
    <button
      formTarget="addToList"
      className={className + '__add-to-list__add'}
      onClick={(e) =>
        addProductToMeal(
          e,
          selectedProduct,
          mealPlans,
          setMealPlans,
          setUnsuccessfulAdditions,
          setSuccessfulAdditions
        )
      }
    >
      Legg til
    </button>
  );
};

export default SubmitButton;
