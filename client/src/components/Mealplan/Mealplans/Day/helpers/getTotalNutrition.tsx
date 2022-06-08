import { IMeal } from '../../../../../Interfaces/Mealplans';
import { getNutritionProps } from './getDailyTotalNutrition';

const getTotalNutrition = (products: IMeal, id: number) => {
  return products.reduce(
    (prev: getNutritionProps, curr: getNutritionProps) => {
      return {
        ...prev,
        properties: {
          ...prev.properties,
          calories: prev.properties.calories + curr.properties.calories,
          macros: {
            fat: {
              total:
                prev.properties.macros.fat.total +
                curr.properties.macros.fat.total,
            },
            protein:
              prev.properties.macros.protein + curr.properties.macros.protein,
            carbs: {
              total:
                prev.properties.macros.carbs.total +
                curr.properties.macros.carbs.total,
              sugar: {
                total:
                  prev.properties.macros.carbs.sugar.total +
                  curr.properties.macros.carbs.sugar.total,
              },
            },
          },
          salt: prev.properties.salt + curr.properties.salt,
          fiber: prev.properties.fiber + curr.properties.fiber,
        },
      };
    },
    {
      id: id,
      properties: {
        calories: 0,
        macros: {
          fat: {
            total: 0,
          },
          protein: 0,
          carbs: {
            total: 0,
            sugar: {
              total: 0,
              added: 0,
            },
          },
        },
        fiber: 0,
        salt: 0,
      },
    }
  );
};

export default getTotalNutrition;
