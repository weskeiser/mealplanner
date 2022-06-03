import { IMeal, IMealplans } from '../../../../Interfaces/Mealplans';
import getTotalNutrition from './getTotalNutrition';

export interface getNutritionProps {
  id: string;
  properties: {
    calories: number;
    macros: {
      fat: number;
      protein: number;
      carbs: {
        total: number;
        sugars: number;
      };
    };
    salt: number;
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
            fat: prev.properties.macros.fat + perMeal.properties.macros.fat,
            protein:
              prev.properties.macros.protein +
              perMeal.properties.macros.protein,
            carbs: {
              total:
                prev.properties.macros.carbs.total +
                perMeal.properties.macros.carbs.total,
              sugars:
                prev.properties.macros.carbs.sugars +
                perMeal.properties.macros.carbs.sugars,
            },
          },
          salt: prev.properties.salt + perMeal.properties.salt,
        },
      };
    },
    {
      id: mealPlan.listName,
      properties: {
        calories: 0,
        macros: {
          fat: 0,
          protein: 0,
          carbs: {
            total: 0,
            sugars: 0,
          },
        },
        salt: 0,
      },
    }
  );
};

export default getDailyTotalNutrition;
