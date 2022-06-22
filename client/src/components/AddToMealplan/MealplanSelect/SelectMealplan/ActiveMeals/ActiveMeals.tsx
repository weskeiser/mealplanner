import { FC } from 'react';
import ListOptions from '../ListOptions/ListOptions';

interface ActiveMealsProps {
  listNames: string[];
}

const ActiveMeals: FC<ActiveMealsProps> = ({ listNames }) => {
  const activeMeals = listNames.map((listName, optionIndex) => {
    return (
      <ListOptions
        key={'activeMeals' + listName}
        listName={listName}
        optionIndex={optionIndex}
      />
    );
  });

  return <>{activeMeals}</>;
};

export default ActiveMeals;
