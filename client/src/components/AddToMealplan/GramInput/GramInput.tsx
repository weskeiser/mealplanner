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

interface IGramInput {
  selectedProduct: IProducts;
  setSelectedProduct: Dispatch<React.SetStateAction<IProducts>>;
  className: string;
  currentProduct: IProducts | {};
  setCurrentProduct: Dispatch<React.SetStateAction<IProducts>>;
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<React.SetStateAction<IMealplans[]>>;
  selectMealplanDayRef: MutableRefObject<HTMLSelectElement | undefined>;
  selectMealplanMealRef: MutableRefObject<HTMLSelectElement | undefined>;
  setErrorMessage: Dispatch<React.SetStateAction<string>>;
}

const GramInput: ForwardRefExoticComponent<
  IGramInput & RefAttributes<HTMLInputElement | undefined>
> = forwardRef<HTMLInputElement | undefined, IGramInput>(
  (
    {
      className,
      selectedProduct,
      setSelectedProduct,
      currentProduct,
      setCurrentProduct,
      mealPlans,
      setMealPlans,
      setErrorMessage,
      selectMealplanMealRef,
      selectMealplanDayRef,
    },
    gramInputRef
  ) => {
    const { properties } = selectedProduct;
    const { serving, calories, salt, macros } = properties;
    const { fat, protein, carbs } = macros;
    const { total, sugars } = carbs;

    const updateNutritionList = (e: React.FormEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;
      const gramInput = parseFloat(input.value);

      const inputFieldValue = input.value;
      const inputCharacter = parseInt(
        inputFieldValue[inputFieldValue.length - 1]
      );

      if (!gramInput) {
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

      const byGramInput = (value: number) => {
        return (value / serving) * gramInput;
      };

      setSelectedProduct({
        ...selectedProduct,
        properties: {
          ...properties,
          serving: gramInput,
          calories: +byGramInput(calories).toFixed(3),
          macros: {
            fat: +byGramInput(fat).toFixed(3),
            protein: +byGramInput(protein).toFixed(3),
            carbs: {
              total: +byGramInput(total).toFixed(3),
              sugars: +byGramInput(sugars).toFixed(3),
            },
          },
          salt: +byGramInput(salt).toFixed(3),
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
          setErrorMessage,
          selectMealplanMealRef,
          selectMealplanDayRef
        );
      }
    };

    return (
      <div className={className}>
        <input
          ref={gramInputRef}
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

export default GramInput;
