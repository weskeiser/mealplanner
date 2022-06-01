import { FC } from 'react';
import ActiveMeals from './ActiveMeals/ActiveMeals';
import InactiveMeals from './InactiveMeals/InactiveMeals';
import IncrementMeals from './IncrementMeals/IncrementMeals';
import ListOptions from './ListOptions/ListOptions';

interface ISelectMealplan {
  className: string;
  listNames: string[];
  name: string;
}

const SelectMealplan: FC<ISelectMealplan> = ({
  className,
  listNames,
  name,
  inputRef,
}) => {
  // const [inactiveMeals, setInactiveMeals] = useState([]);

  // const activeMeals = listNames.map((listName, optionIndex) => {
  //   return (
  //     <ListOptions
  //       key={'activeMeals' + listName}
  //       listName={listName}
  //       className={className}
  //       optionIndex={optionIndex}
  //     />
  //   );
  // });

  const inactiveMeals = [1, 2, 3, 4, 5, 6].map((number) => {
    const mealNumber = number + listNames.length;
    if (number < 7 - listNames.length) {
      return (
        <ListOptions
          key={'inactiveMeal' + mealNumber}
          listName={'Måltid ' + mealNumber}
          className={'disabled ' + className}
          optionIndex={1}
          disabled={true}
        />
      );
    }
    return null;
  });

  return (
    <fieldset name={name} className={className + '__add-to-list__options'}>
      <ActiveMeals listNames={listNames} className={className} />
      {name === 'selectMeal' && (
        <InactiveMeals listNames={listNames} className={className} />
      )}
      {name === 'selectMeal' && <IncrementMeals />}
    </fieldset>
  );
};

export default SelectMealplan;
