import { FC } from 'react';
import ListOptions from '../ListOptions/ListOptions';

interface IActiveMeals {
  listNames: string[];
  className: string;
}

const ActiveMeals: FC<IActiveMeals> = ({ listNames, className }) => {
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
