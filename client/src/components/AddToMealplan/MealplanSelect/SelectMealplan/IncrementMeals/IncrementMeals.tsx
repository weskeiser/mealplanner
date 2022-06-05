import { Dispatch, FC, SetStateAction } from 'react';
import IncrementButton from './IncrementButton/IncrementButton';

interface IncrementMealsProps {
  setMealNamesList: Dispatch<SetStateAction<string[]>>;
  mealNamesList: string[];
  className: string;
}

interface IncrementMealsProps {
  mealNamesList: string[];
  setMealNamesList: Dispatch<SetStateAction<string[]>>;
  className: string;
}

const IncrementMeals: FC<IncrementMealsProps> = ({
  mealNamesList,
  setMealNamesList,
  className,
}) => {
  return (
    <>
      <IncrementButton
        className={className}
        mealNamesList={mealNamesList}
        setMealNamesList={setMealNamesList}
        incrementType="decrement"
        children="
        &#8593;"
      />

      <IncrementButton
        className={className}
        mealNamesList={mealNamesList}
        setMealNamesList={setMealNamesList}
        incrementType="increment"
        children="
        &#8595;"
      />
    </>
  );
};

export default IncrementMeals;
