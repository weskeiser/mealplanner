import { Dispatch, FC, SetStateAction } from 'react';
import incrementMeals from './helpers/incrementMeals';

interface IncrementButtonProps {
  incrementType: string;
  children: string;
  mealNamesList: string[];
  setMealNamesList: Dispatch<SetStateAction<string[]>>;
  className: string;
}

const IncrementButton: FC<IncrementButtonProps> = ({
  incrementType,
  mealNamesList,
  setMealNamesList,
  children,
  className,
}) => {
  return (
    <button
      className={className + '__add-to-list__options__increment'}
      onClick={(e) =>
        incrementMeals(e, incrementType, mealNamesList, setMealNamesList)
      }
    >
      {children}
    </button>
  );
};

export default IncrementButton;
