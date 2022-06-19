import { useMemo } from 'react';
import { IProducts } from '../../../../Interfaces/Products';
import { getNutritionProps } from '../../../Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition';

export interface nutrientsData {
  data: [string, number][];
  meta: {
    type: string;
    title: string;
    id: string | number;
  };
}

const useNutrientsMemo = (selectedProduct: IProducts | getNutritionProps) => {
  return useMemo<nutrientsData>(() => {
    const { properties } = selectedProduct;
    const { calories, macros, salt, fiber } = properties;
    const { fat, protein, carbs } = macros;
    const { total: fatTotal } = fat;
    const {
      total,
      sugar: { total: totalSugar },
    } = carbs;

    return {
      data: [
        ['Kalorier', calories],
        ['Fett', fatTotal],
        ['Proteiner', protein],
        ['Karbohydrater', total],
        ['- Hvorav sukkerarter', totalSugar],
        ['Fiber', fiber],
        ['Salt', salt],
      ],
      meta: {
        type: 'standard',
        title: 'Næringsinnhold',
        id: selectedProduct.id,
      },
    };
  }, [selectedProduct]);
};

export default useNutrientsMemo;
