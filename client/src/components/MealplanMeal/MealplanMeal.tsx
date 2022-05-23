import { useState } from 'react';
import { IMealplanD } from '../../Interfaces/Mealplans';
import AddedProducts from '../AddedProducts/AddedProducts';

const MealplanMeal = ({ mealplan }: IMealplanD) => {
  const [hidden, setHidden] = useState<Boolean>(true);

  const openList = () => {
    setHidden(!hidden);
  };

  const decideVisibility = hidden ? 'hidden' : '';

  return (
    <>
      <div className="mealplan__meal">
        <h3 className="mealplan__meal__title">Måltid 1</h3>
        <div className="mealplan__meal__arrow__outter" onClick={openList}>
          <div className="mealplan__meal__arrow__inner"></div>
        </div>
      </div>
      <div className={decideVisibility}>
        {mealplan.meals.map((meal) => (
          <AddedProducts meal={meal} />
        ))}
      </div>
    </>
  );
};

export default MealplanMeal;
