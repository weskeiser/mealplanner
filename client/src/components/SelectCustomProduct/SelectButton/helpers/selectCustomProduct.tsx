import { Dispatch, SetStateAction } from 'react';
import { IProducts } from '../../../../Interfaces/Products';

const selectCustomProduct = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  setSelectedProduct: Dispatch<SetStateAction<IProducts>>
) => {
  e.preventDefault();
  const form = e.target.form;

  // Input value by *LAST WORD* in form name.
  const inputValueByName = (nutrientName: string) => {
    return +form[nutrientName].value;
  };

  const fatInputValue = inputValueByName('Fett');
  const proteinInputValue = inputValueByName('Proteiner');
  const carbsInputValue = inputValueByName('Karbohydrater');

  const calculateCalories = (fat: number, protein: number, carbs: number) => {
    const fromFat = fat * 9;
    const fromProtein = protein * 4;
    const fromCarbs = carbs * 4;

    return fromFat + fromProtein + fromCarbs;
  };

  setSelectedProduct({
    id: 99999,
    name: form.name.value,
    category: '',
    properties: {
      brand: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Estrella_de_cinco_puntas_especial.jpg',
      serving: 100,
      calories:
        inputValueByName('Kalorier') ||
        calculateCalories(fatInputValue, proteinInputValue, carbsInputValue),
      macros: {
        fat: fatInputValue,
        protein: proteinInputValue,
        carbs: {
          total: carbsInputValue,
          sugars: inputValueByName('sukkerarter'),
        },
      },
      salt: +form.Salt.value,
    },
  });
};

export default selectCustomProduct;
