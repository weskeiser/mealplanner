import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  Dispatch,
  MutableRefObject,
} from 'react';
import { IMealplans } from '../../../Interfaces/Mealplans';
import { IProducts } from '../../../Interfaces/Products';
import addProductToMeal from '../addProductToMeal';

interface IServingInput {
  selectedProduct: IProducts;
  setSelectedProduct: Dispatch<React.SetStateAction<IProducts>>;
  className: string;
  currentProduct: IProducts | {};
  setCurrentProduct: Dispatch<React.SetStateAction<IProducts>>;
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<React.SetStateAction<IMealplans[]>>;
  selectMealplanDayRef: MutableRefObject<HTMLSelectElement | undefined>;
  selectMealplanMealRef: MutableRefObject<HTMLSelectElement | undefined>;
  setExistsErrorMessage: Dispatch<React.SetStateAction<string>>;
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
      setExistsErrorMessage,
      selectMealplanMealRef,
      selectMealplanDayRef,
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
      const inputCharacter = parseInt(
        inputFieldValue[inputFieldValue.length - 1]
      );

      if (!servingInput) {
        setSelectedProduct(currentProduct);
        return;
      }

      if (isNaN(inputCharacter)) {
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
          setExistsErrorMessage,
          selectMealplanMealRef,
          selectMealplanDayRef
        );
      }
    };

    return (
      <div className={className}>
        <input
          ref={servingInputRef}
          className={className + '__input'}
          type="text"
          name="amountInGrams"
          id="addProduct"
          onInput={(e) => updateNutritionList(e)}
          placeholder="100g"
          autoComplete="off"
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>
    );
  }
);

export default ServingInput;
