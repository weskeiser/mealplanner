import { Dispatch, FC, SetStateAction } from 'react';
import IncrementButton from './IncrementButton/IncrementButton';

interface IIncrementMeals {
  setMealNamesList: Dispatch<SetStateAction<string[]>>;
  mealNamesList: string[];
  className: string;
}

interface IincrementMeals {
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  type: string;
}

const IncrementMeals: FC<IIncrementMeals> = ({
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
