import { Dispatch, FC, SetStateAction } from 'react';
import ActiveMeals from './ActiveMeals/ActiveMeals';
import InactiveMeals from './InactiveMeals/InactiveMeals';
import IncrementMeals from './IncrementMeals/IncrementMeals';

interface ISelectMealplan {
  className: string;
  listNames: string[];
  name: string;
  mealNamesList: string[];
  setMealNamesList: Dispatch<SetStateAction<string[]>>;
}

const SelectMealplan: FC<ISelectMealplan> = ({
  className,
  listNames,
  name,
  mealNamesList,
  setMealNamesList,
}) => {
  return (
    <div className={className + '__add-to-list__options'} name={name}>
      <ActiveMeals listNames={listNames} className={className} />
      {name === 'selectMeal' && (
        <InactiveMeals listNames={listNames} className={className} />
      )}
      {name === 'selectMeal' && (
        <IncrementMeals
          mealNamesList={mealNamesList}
          setMealNamesList={setMealNamesList}
        />
      )}
    </div>
  );
};

export default SelectMealplan;
