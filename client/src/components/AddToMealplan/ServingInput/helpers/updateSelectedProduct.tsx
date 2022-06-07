import { Dispatch, FormEvent, SetStateAction } from 'react';
import { IProducts } from '../../../../Interfaces/Products';

const updateSelectedProduct = (
  e: FormEvent<HTMLInputElement>,
  selectedProduct: IProducts,
  setSelectedProduct: Dispatch<SetStateAction<IProducts>>,
  selectedProductOriginalServing: IProducts | {},
  setSelectedProductOriginalServing: Dispatch<SetStateAction<IProducts>>
) => {
  const { properties } = selectedProduct;
  const { serving, calories, salt, macros } = properties;
  const { fat, protein, carbs } = macros;
  const { total, sugars } = carbs;

  const input = e.target as HTMLInputElement;
  const servingInput = parseFloat(input.value);

  const inputFieldValue = input.value;

  if (!servingInput) {
    setSelectedProduct(selectedProductOriginalServing);
    return;
  }

  if (inputFieldValue.length >= 5) {
    e.target.value = inputFieldValue.slice(0, inputFieldValue.length - 1);
    return;
  }

  if (Object.keys(selectedProductOriginalServing).length === 0) {
    setSelectedProductOriginalServing(selectedProduct);
  }

  const updateServing = (nutrientAmount: number) => {
    return +((nutrientAmount / serving) * servingInput).toFixed(3);
  };

  setSelectedProduct({
    ...selectedProduct,
    properties: {
      ...properties,
      serving: servingInput,
      calories: updateServing(calories),
      macros: {
        fat: updateServing(fat),
        protein: updateServing(protein),
        carbs: {
          total: updateServing(total),
          sugars: updateServing(sugars),
        },
      },
      salt: +updateServing(salt).toFixed(3),
    },
  });
};

export default updateSelectedProduct;
