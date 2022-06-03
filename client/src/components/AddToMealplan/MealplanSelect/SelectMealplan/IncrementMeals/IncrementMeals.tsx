import { Dispatch, FC, SetStateAction } from 'react';

interface IIncrementMeals {
  setMealNamesList: Dispatch<SetStateAction<string[]>>;
  mealNamesList: string[];
}

interface IincrementMeals {
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  type: string;
}

const IncrementMeals: FC<IIncrementMeals> = ({
  mealNamesList,
  setMealNamesList,
}) => {
  const incrementMeals = (e, type) => {
    e.preventDefault();

    if (type === 'increment' && mealNamesList.length < 6) {
      const nextMeal = mealNamesList.length + 1;
      const newMealNamesList = [...mealNamesList, `Måltid ${nextMeal}`];
      setMealNamesList(newMealNamesList);
    }

    if (type === 'decrement' && mealNamesList.length > 1) {
      const newMealNamesList = mealNamesList.slice(0, mealNamesList.length - 1);
      setMealNamesList(newMealNamesList);
    }
  };

  return (
    <div className="selected-product__add-to-list__options__increment">
      {/* <button>&#9660;</button>
      <button>&#9650;</button> */}
      <button onClick={(e) => incrementMeals(e, 'decrement')}>&#8593;</button>
      <button onClick={(e) => incrementMeals(e, 'increment')}>&#8595;</button>
    </div>
  );
};

export default IncrementMeals;
