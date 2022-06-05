import { Dispatch, FC, SetStateAction } from 'react';
import IncrementButton from './IncrementButton/IncrementButton';

interface IncrementMealsProps {
  setMealNames: Dispatch<SetStateAction<string[]>>;
  mealNames: string[];
  className: string;
}

interface IncrementMealsProps {
  mealNames: string[];
  setMealNames: Dispatch<SetStateAction<string[]>>;
  className: string;
}

const IncrementMeals: FC<IncrementMealsProps> = ({
  mealNames,
  setMealNames,
  className,
}) => {
  return (
    <>
      <IncrementButton
        className={className}
        mealNames={mealNames}
        setMealNames={setMealNames}
        incrementType="decrement"
        children="
        &#8593;"
      />

      <IncrementButton
        className={className}
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
