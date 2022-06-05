import { FC } from 'react';
import ListOptions from '../ListOptions/ListOptions';

interface InactiveMealsProps {
  listNames: string[];
  className: string;
}

const InactiveMeals: FC<InactiveMealsProps> = ({ listNames, className }) => {
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

  return <>{inactiveMeals}</>;
};

export default InactiveMeals;
