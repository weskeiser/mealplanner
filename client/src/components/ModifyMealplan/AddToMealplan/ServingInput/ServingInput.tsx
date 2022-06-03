import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  Dispatch,
} from 'react';
import { IMealplans } from '../../../../Interfaces/Mealplans';
import { IProducts } from '../../../../Interfaces/Products';
import addProductToMeal from '../addProductToMeal';

interface IServingInput {
  selectedProduct: IProducts;
  setSelectedProduct: Dispatch<React.SetStateAction<IProducts>>;
  className: string;
  currentProduct: IProducts | {};
  setCurrentProduct: Dispatch<React.SetStateAction<IProducts>>;
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<React.SetStateAction<IMealplans[]>>;
  setUnsuccessfulAdditions: Dispatch<React.SetStateAction<string[] | never[]>>;
  setSuccessfulAdditions: Dispatch<React.SetStateAction<string[] | never[]>>;
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
    const { properties } = selectedProduct;
    const { serving, calories, salt, macros } = properties;
    const { fat, protein, carbs } = macros;
    const { total, sugars } = carbs;

    const updateNutritionList = (e: React.FormEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;
      const servingInput = parseFloat(input.value);

      const inputFieldValue = input.value;

      if (!servingInput) {
        setSelectedProduct(currentProduct);
        return;
      }

      if (inputFieldValue.length >= 5) {
        e.target.value = inputFieldValue.slice(0, inputFieldValue.length - 1);
        return;
      }

      if (Object.keys(currentProduct).length === 0) {
        setCurrentProduct(selectedProduct);
      }

      const byServingInput = (value: number) => {
        return (value / serving) * servingInput;
      };

      setSelectedProduct({
        ...selectedProduct,
        properties: {
          ...properties,
          serving: servingInput,
          calories: +byServingInput(calories).toFixed(3),
          macros: {
            fat: +byServingInput(fat).toFixed(3),
            protein: +byServingInput(protein).toFixed(3),
            carbs: {
              total: +byServingInput(total).toFixed(3),
              sugars: +byServingInput(sugars).toFixed(3),
            },
          },
          salt: +byServingInput(salt).toFixed(3),
        },
      });
    };

    const handleKeyDown = (e) => {
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
        e.target.blur();
      }

      const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      if (parseInt(e.key) !== numbers[parseInt(e.key)]) {
        e.preventDefault();
      }
    };

    return (
      <div className={className}>
        <input
          ref={servingInputRef}
          className={className + '__input'}
          type="number"
          name="amountInGrams"
          id="addProduct"
          onInput={(e) => updateNutritionList(e)}
          placeholder="100g"
          autoComplete="off"
          onKeyDown={(e) => handleKeyDown(e)}
          maxLength={4}
        />
      </div>
    );
  }
);

export default ServingInput;
