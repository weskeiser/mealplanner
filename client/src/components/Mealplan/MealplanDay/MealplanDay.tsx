import { FC, useState } from 'react';
import { IMeal, IMealplans } from '../../../Interfaces/Mealplans';
import NutritionList from '../../NutritionList/NutritionList';
import MealplanMeal from './MealplanMeal/MealplanMeal';
import { ItotalNutritionalValue } from './MealplanMeal/ProductsAndNutrition/ProductsAndNutrition';

interface IMealplanDay {
  mealPlan: IMealplans;
  mealPlans: IMealplans[];
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
}

const MealplanDay: FC<IMealplanDay> = ({
  mealPlan,
  mealPlans,
  setMealPlans,
}) => {
  const [visible, setVisible] = useState<Boolean>(true);

  const openList = () => {
    setVisible(!visible);
  };

  const mealPlanMeals = mealPlan.meals.map((meal: IMeal) => (
    <MealplanMeal
      key={mealPlan.listName + meal.listName}
      mealPlan={mealPlan}
      mealPlans={mealPlans}
      setMealPlans={setMealPlans}
      meal={meal}
    />
  ));

  const openOrClosed = visible
    ? 'mealPlan__day__title__toggle__inner mealPlan__day__title__toggle__inner__make-line'
    : 'mealPlan__day__title__toggle__inner';

  const totalNutritionalValue = mealPlan.meals.reduce(
    (prev: ItotalNutritionalValue, curr: IMeal) => {
      const perMeal = curr.products.reduce(
        (prev: ItotalNutritionalValue, curr: ItotalNutritionalValue) => {
          return {
            ...prev,
            properties: {
              ...prev.properties,
              calories: prev.properties.calories + curr.properties.calories,
              macros: {
                fat: prev.properties.macros.fat + curr.properties.macros.fat,
                protein:
                  prev.properties.macros.protein +
                  curr.properties.macros.protein,
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

  return (
    <>
      <section className="mealPlan">
        <section className="mealPlan__day">
          <h2 className="mealPlan__day__title">{mealPlan.listName}</h2>
          <button
            className="mealPlan__day__title__toggle"
            onClick={openList}
            aria-label="open mealplan day"
          >
            <div className={openOrClosed}></div>
          </button>
        </section>

        {visible && (
          <>
            <section className="mealPlan__meals">
              <>{mealPlanMeals}</>
            </section>

            <section className="mealPlan__total">
              <h3 className="mealPlan__total__title">
                {mealPlan.listName} - Alle Måltider
              </h3>
              <NutritionList
                className="mealPlan__total"
                selectedProduct={totalNutritionalValue}
                totalServing={'Totalt'}
              />
            </section>
          </>
        )}
      </section>

      <hr className="mealPlan__day__divider--lower dividers" />
    </>
  );
};

export default MealplanDay;
