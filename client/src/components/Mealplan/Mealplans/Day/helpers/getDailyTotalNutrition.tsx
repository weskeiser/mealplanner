import { IMeal, IMealplans } from '../../../../../Interfaces/Mealplans';
import getTotalNutrition from './getTotalNutrition';

export interface getNutritionProps {
  id: string;
  properties: {
    calories: number;
    macros: {
      fat: {
        total: number;
        types: {
          saturated: number;
          trans: number;
          monounsaturated: number;
          polyunsaturated: number;
        };
        cholesterol: number;
      };
      protein: number;
      carbs: {
        total: number;
        sugar: {
          total: number;
          added: number;
        };
      };
    };
    salt: number;
    fiber: number;
  };
}

const getDailyTotalNutrition = (mealPlan: IMealplans) => {
  return mealPlan.meals.reduce(
    (prev: getNutritionProps, curr: IMeal | getNutritionProps) => {
      const perMeal = getTotalNutrition(curr.products, '');

      return {
        ...prev,
        properties: {
          ...prev.properties,
          calories: prev.properties.calories + perMeal.properties.calories,
          macros: {
            fat: {
              total:
                prev.properties.macros.fat.total +
                perMeal.properties.macros.fat.total,
            },
            protein:
              prev.properties.macros.protein +
              perMeal.properties.macros.protein,
            carbs: {
              total:
                prev.properties.macros.carbs.total +
                perMeal.properties.macros.carbs.total,
              sugar: {
                total:
                  prev.properties.macros.carbs.sugar.total +
                  perMeal.properties.macros.carbs.sugar.total,
              },
            },
          },
          salt: prev.properties.salt + perMeal.properties.salt,
          fiber: prev.properties.fiber + perMeal.properties.fiber,
        },
      };
    },
    {
      id: mealPlan.listName,
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
        salt: 0,
        fiber: 0,
      },
    }
  );
};

export default getDailyTotalNutrition;
