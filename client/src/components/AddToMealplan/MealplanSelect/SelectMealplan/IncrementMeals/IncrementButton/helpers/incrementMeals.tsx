import { Dispatch, SetStateAction } from 'react';

const incrementMeals = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  incrementType: string,
  mealNames: string[],
  setMealNames: Dispatch<SetStateAction<string[]>>
) => {
  e.preventDefault();

  if (incrementType === 'increment' && mealNames.length < 6) {
    const nextMeal = mealNames.length + 1;
    const newMealNames = [...mealNames, `Måltid ${nextMeal}`];
    setMealNames(newMealNames);
  }

  if (incrementType === 'decrement' && mealNames.length > 1) {
    const newMealNames = mealNames.slice(0, mealNames.length - 1);
    setMealNames(newMealNames);
  }
};

export default incrementMeals;
