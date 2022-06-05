import { Dispatch, FormEvent, SetStateAction } from 'react';
import { IProducts } from '../../../Interfaces/Products';

const updateNutritionList = (
  e: FormEvent<HTMLInputElement>,
  selectedProduct: IProducts,
  setSelectedProduct: Dispatch<SetStateAction<IProducts>>,
  currentProduct: IProducts | {},
  setCurrentProduct: Dispatch<SetStateAction<IProducts>>
) => {
  const { properties } = selectedProduct;
  const { serving, calories, salt, macros } = properties;
  const { fat, protein, carbs } = macros;
  const { total, sugars } = carbs;

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

export default updateNutritionList;
