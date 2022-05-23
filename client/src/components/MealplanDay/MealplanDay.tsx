import { useState } from 'react';
import { IMealplanD } from '../../Interfaces/Mealplans';
import MealplanMeal from '../MealplanMeal/MealplanMeal';

const MealplanDay = ({ mealplan }: IMealplanD) => {
  const [hidden, setHidden] = useState<Boolean>(true);

  const openList = () => {
    setHidden(!hidden);
  };

  const decideVisibility = hidden ? 'hidden' : '';
  return (
    <>
      <div className="mealplan__day">
        <h2 className="mealplan__day__title">{mealplan.listName}</h2>
        <div className="mealplan__day__arrow__outter" onClick={openList}>
          <div className="mealplan__day__arrow__inner"></div>
        </div>
      </div>

      <div className={decideVisibility}>
        <MealplanMeal mealplan={mealplan} />
      </div>

      <hr className="mealplan__day__divider--lower dividers" />
    </>
  );
};

export default MealplanDay;
