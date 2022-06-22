import { Dispatch, FC, SetStateAction } from 'react';
import ActiveMeals from './ActiveMeals/ActiveMeals';
import InactiveMeals from './InactiveMeals/InactiveMeals';
import IncrementMeals from './IncrementMeals/IncrementMeals';

import * as Styled from './SelectMealplan.styled';

interface SelectMealplanProps {
  listNames: string[];
  name: string;
  mealNames: string[];
  setMealNames: Dispatch<SetStateAction<string[]>>;
}

const SelectMealplan: FC<SelectMealplanProps> = ({
  name,
  listNames,
  mealNames,
  setMealNames,
}) => {
  return (
    <Styled.SelectMealplan name={name}>
      <ActiveMeals listNames={listNames} />
      {name === 'selectMeal' && <InactiveMeals listNames={listNames} />}
      {name === 'selectMeal' && (
        <IncrementMeals mealNames={mealNames} setMealNames={setMealNames} />
      )}
    </Styled.SelectMealplan>
  );
};

export default SelectMealplan;
