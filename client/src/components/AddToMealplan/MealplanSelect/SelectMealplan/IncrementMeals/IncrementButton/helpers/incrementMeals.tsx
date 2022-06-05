import { Dispatch, SetStateAction } from 'react';

const incrementMeals = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  incrementType: string,
  mealNamesList: string[],
  setMealNamesList: Dispatch<SetStateAction<string[]>>
) => {
  e.preventDefault();

  if (incrementType === 'increment' && mealNamesList.length < 6) {
    const nextMeal = mealNamesList.length + 1;
    const newMealNamesList = [...mealNamesList, `Måltid ${nextMeal}`];
    setMealNamesList(newMealNamesList);
  }

  if (incrementType === 'decrement' && mealNamesList.length > 1) {
    const newMealNamesList = mealNamesList.slice(0, mealNamesList.length - 1);
    setMealNamesList(newMealNamesList);
  }
};

export default incrementMeals;
