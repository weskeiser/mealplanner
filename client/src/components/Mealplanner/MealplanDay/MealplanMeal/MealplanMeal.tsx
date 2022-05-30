import { FC, useState } from 'react';
import { IMeal, IMealplans } from '../../../../Interfaces/Mealplans';
import ProductsAndNutrition from './ProductsAndNutrition/ProductsAndNutrition';

interface IMealplanMeal {
  meal: IMeal;
  mealPlan: IMealplans;
  mealPlans: IMealplans[];
  setMealPlans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
}

const MealplanMeal: FC<IMealplanMeal> = ({
  meal,
  mealPlan,
  mealPlans,
  setMealPlans,
}) => {
  const [visible, setVisible] = useState<Boolean>(true);

  const openList = () => {
    setVisible(!visible);
  };

  const openOrClosed = visible
    ? 'mealPlan__meals__meal__title__toggle__inner mealPlan__meals__meal__title__toggle__inner__make-line'
    : 'mealPlan__meals__meal__title__toggle__inner';

  return (
    <section className="mealPlan__meals__meal">
      <div className="mealPlan__meals__meal__title">
        <h3 className="mealPlan__meals__meal__title__name">{meal.listName}</h3>
        <div
          className="mealPlan__meals__meal__title__toggle"
          onClick={openList}
        >
          <div className={openOrClosed}></div>
        </div>
      </div>

      {visible && (
        <ProductsAndNutrition
          key={mealPlan.listName + meal.listName}
          meal={meal}
          mealPlanDayName={mealPlan.listName}
          mealPlans={mealPlans}
          setMealPlans={setMealPlans}
        />
      )}
    </section>
  );
};

export default MealplanMeal;
