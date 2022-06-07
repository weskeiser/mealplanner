import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  Dispatch,
  SetStateAction,
} from 'react';
import { IMealplans } from '../../../Interfaces/Mealplans';
import { IProducts } from '../../../Interfaces/Products';
import handleKeyDown from './helpers/handleKeyDown';
import updateSelectedProduct from './helpers/updateSelectedProduct';

interface ServingInputProps {
  selectedProduct: IProducts;
  setSelectedProduct: Dispatch<SetStateAction<IProducts>>;
  className: string;
  selectedProductOriginalServing: IProducts | {};
  setSelectedProductOriginalServing: Dispatch<SetStateAction<IProducts>>;
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<SetStateAction<IMealplans[]>>;
  setUnsuccessfulAdditions: Dispatch<SetStateAction<string[] | never[]>>;
  setSuccessfulAdditions: Dispatch<SetStateAction<string[] | never[]>>;
}

const ServingInput: ForwardRefExoticComponent<
  ServingInputProps & RefAttributes<HTMLInputElement | undefined>
> = forwardRef<HTMLInputElement | undefined, ServingInputProps>(
  (
    {
      className,
      selectedProduct,
      setSelectedProduct,
      selectedProductOriginalServing,
      setSelectedProductOriginalServing,
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
          updateSelectedProduct(
            e,
            selectedProduct,
            setSelectedProduct,
            selectedProductOriginalServing,
            setSelectedProductOriginalServing
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
