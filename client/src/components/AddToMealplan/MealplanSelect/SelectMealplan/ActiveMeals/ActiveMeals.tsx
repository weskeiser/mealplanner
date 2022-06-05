import { FC } from 'react';
import ListOptions from '../ListOptions/ListOptions';

interface ActiveMealsProps {
  listNames: string[];
  className: string;
}

const ActiveMeals: FC<ActiveMealsProps> = ({ listNames, className }) => {
  const activeMeals = listNames.map((listName, optionIndex) => {
    return (
      <ListOptions
        key={'activeMeals' + listName}
        listName={listName}
        className={className}
        optionIndex={optionIndex}
      />
    );
  });

  return <>{activeMeals}</>;
};

export default ActiveMeals;
