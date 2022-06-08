import { IMeal } from '../../../../../Interfaces/Mealplans';
import { getNutritionProps } from './getDailyTotalNutrition';

const getTotalNutrition = (products: IMeal, id: number) => {
  return products.reduce(
    (
      prev: getNutritionProps,
      { properties: currProperties }: getNutritionProps
    ) => {
      const prevProperties = prev.properties;

      return {
        ...prev,
        properties: {
          ...prevProperties,
          calories: prevProperties.calories + currProperties.calories,
          macros: {
            fat: {
              total:
                prevProperties.macros.fat.total +
                currProperties.macros.fat.total,
            },
            protein:
              prevProperties.macros.protein + currProperties.macros.protein,
            carbs: {
              total:
                prevProperties.macros.carbs.total +
                currProperties.macros.carbs.total,
              sugar: {
                total:
                  prevProperties.macros.carbs.sugar.total +
                  currProperties.macros.carbs.sugar.total,
              },
            },
          },
          salt: prevProperties.salt + currProperties.salt,
          fiber: prevProperties.fiber + currProperties.fiber,
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
