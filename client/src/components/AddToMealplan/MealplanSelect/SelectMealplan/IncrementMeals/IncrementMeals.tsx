import { Dispatch, FC, SetStateAction } from 'react';
import IncrementButton from './IncrementButton/IncrementButton';

interface IncrementMealsProps {
  mealNames: string[];
  setMealNames: Dispatch<SetStateAction<string[]>>;
}

const IncrementMeals: FC<IncrementMealsProps> = ({
  mealNames,
  setMealNames,
}) => {
  return (
    <>
      <IncrementButton
        mealNames={mealNames}
        setMealNames={setMealNames}
        incrementType="decrement"
        children="
        &#8593;"
      />

      <IncrementButton
        mealNames={mealNames}
        setMealNames={setMealNames}
        incrementType="increment"
        children="
        &#8595;"
      />
    </>
  );
};

export default IncrementMeals;
