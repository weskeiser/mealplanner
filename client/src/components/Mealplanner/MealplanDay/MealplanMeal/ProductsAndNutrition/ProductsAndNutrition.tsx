import { FC } from 'react';
import { IMeal, IMealplans } from '../../../../../Interfaces/Mealplans';
import AddedProduct from './AddedProduct/AddedProduct';
import NutritionList from '../../../../NutritionList/NutritionList';

interface IProductsAndNutrition {
  meal: IMeal;
  mealPlans: IMealplans[];
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
  mealPlanDayName: string;
}

export interface ItotalNutritionalValue {
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

const ProductsAndNutrition: FC<IProductsAndNutrition> = ({
  meal,
  mealPlans,
  setMealPlans,
  mealPlanDayName,
}) => {
  const totalNutritionalValue = meal.products.reduce(
    (prev: ItotalNutritionalValue, curr: ItotalNutritionalValue) => {
      return {
        ...prev,
        properties: {
          ...prev.properties,
          calories: prev.properties.calories + curr.properties.calories,
          macros: {
            fat: prev.properties.macros.fat + curr.properties.macros.fat,
            protein:
              prev.properties.macros.protein + curr.properties.macros.protein,
            carbs: {
              total:
                prev.properties.macros.carbs.total +
                curr.properties.macros.carbs.total,
              sugars:
                prev.properties.macros.carbs.sugars +
                curr.properties.macros.carbs.sugars,
            },
          },
          salt: prev.properties.salt + curr.properties.salt,
        },
      };
    },
    {
      id: meal.listName,
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

  const ProductsAndNutritionClass = 'mealPlan__meals__meal__added-products';

  return (
    <>
      <ul className={ProductsAndNutritionClass}>
        <AddedProduct
          meal={meal}
          mealPlans={mealPlans}
          setMealPlans={setMealPlans}
          mealPlanDayName={mealPlanDayName}
          ProductsAndNutritionClass={ProductsAndNutritionClass}
        />
      </ul>
      <div className={ProductsAndNutritionClass + '__nutrition-list__heading'}>
        <h3
          className={
            ProductsAndNutritionClass + '__nutrition-list__heading__title'
          }
        >
          Næringsinnhold
        </h3>
        <p
          className={
            ProductsAndNutritionClass + '__nutrition-list__heading__serving'
          }
        >
          Totalt
        </p>
      </div>
      <NutritionList
        className={ProductsAndNutritionClass + '__nutrition-list'}
        selectedProduct={totalNutritionalValue}
        additionalKeys={mealPlanDayName + meal.listName}
      />
    </>
  );
};

export default ProductsAndNutrition;
