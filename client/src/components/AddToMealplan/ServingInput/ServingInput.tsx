import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  Dispatch,
  SetStateAction,
} from 'react';
import { IMealplans } from '../../../Interfaces/Mealplans';
import { IProducts } from '../../../Interfaces/Products';
import handleKeyDown from './handleKeyDown';
import updateNutritionList from './updateNutritionList';

interface IServingInput {
  selectedProduct: IProducts;
  setSelectedProduct: Dispatch<SetStateAction<IProducts>>;
  className: string;
  currentProduct: IProducts | {};
  setCurrentProduct: Dispatch<SetStateAction<IProducts>>;
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<SetStateAction<IMealplans[]>>;
  setUnsuccessfulAdditions: Dispatch<SetStateAction<string[] | never[]>>;
  setSuccessfulAdditions: Dispatch<SetStateAction<string[] | never[]>>;
}

const ServingInput: ForwardRefExoticComponent<
  IServingInput & RefAttributes<HTMLInputElement | undefined>
> = forwardRef<HTMLInputElement | undefined, IServingInput>(
  (
    {
      className,
      selectedProduct,
      setSelectedProduct,
      currentProduct,
      setCurrentProduct,
      mealPlans,
      setMealPlans,
      setUnsuccessfulAdditions,
      setSuccessfulAdditions,
    },
    servingInputRef
  ) => {
    return (
      <input
        ref={servingInputRef}
        className={className}
        type="number"
        name="amountInGrams"
        id="addProduct"
        placeholder="100g"
        autoComplete="off"
        maxLength={4}
        onInput={(e) =>
          updateNutritionList(
            e,
            selectedProduct,
            setSelectedProduct,
            currentProduct,
            setCurrentProduct
          )
        }
        onKeyDown={(e) =>
          handleKeyDown(
            e,
            selectedProduct,
            mealPlans,
            setMealPlans,
            setUnsuccessfulAdditions,
            setSuccessfulAdditions
          )
        }
      />
    );
  }
);

export default ServingInput;
