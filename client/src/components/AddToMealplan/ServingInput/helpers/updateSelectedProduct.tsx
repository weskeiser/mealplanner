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
  const { serving, calories, salt, fiber, macros } = properties;
  const { fat, protein, carbs } = macros;
  const { total: fatTotal, cholesterol, types } = fat;
  const { saturated, trans, monounsaturated, polyunsaturated } = types;
  const { total, sugar } = carbs;
  const { total: sugarTotal, added: sugarAdded } = sugar;

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
        fat: {
          total: updateServing(fatTotal),
          types: {
            saturated: updateServing(saturated),
            trans: updateServing(trans),
            monounsaturated: updateServing(monounsaturated),
            polyunsaturated: updateServing(polyunsaturated),
          },
          cholesterol: updateServing(cholesterol),
        },
        protein: updateServing(protein),
        carbs: {
          total: updateServing(total),
          sugar: {
            total: updateServing(sugarTotal),
            added: updateServing(sugarAdded),
          },
        },
      },
      fiber: updateServing(fiber),
      salt: updateServing(salt),
    },
  });
};

export default updateSelectedProduct;
