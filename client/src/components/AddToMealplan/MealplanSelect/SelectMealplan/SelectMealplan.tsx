import { Dispatch, FC, SetStateAction } from 'react';
import ActiveMeals from './ActiveMeals/ActiveMeals';
import InactiveMeals from './InactiveMeals/InactiveMeals';
import IncrementMeals from './IncrementMeals/IncrementMeals';

interface SelectMealplanProps {
  className: string;
  listNames: string[];
  name: string;
  mealNames: string[];
  setMealNames: Dispatch<SetStateAction<string[]>>;
}

const SelectMealplan: FC<SelectMealplanProps> = ({
  name,
  className,
  listNames,
  mealNames,
  setMealNames,
}) => {
  return (
    <div className={className + '__add-to-list__options'} name={name}>
      <ActiveMeals listNames={listNames} className={className} />
      {name === 'selectMeal' && (
        <InactiveMeals listNames={listNames} className={className} />
      )}
      {name === 'selectMeal' && (
        <IncrementMeals
          mealNames={mealNames}
          setMealNames={setMealNames}
          className={className}
        />
      )}
    </div>
  );
};

export default SelectMealplan;
