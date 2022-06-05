import { Dispatch, FC, SetStateAction } from 'react';
import incrementMeals from './helpers/incrementMeals';

interface IncrementButtonProps {
  incrementType: string;
  children: string;
  mealNames: string[];
  setMealNames: Dispatch<SetStateAction<string[]>>;
  className: string;
}

const IncrementButton: FC<IncrementButtonProps> = ({
  incrementType,
  mealNames,
  setMealNames,
  children,
  className,
}) => {
  return (
    <button
      className={className + '__add-to-list__options__increment'}
      onClick={(e) => incrementMeals(e, incrementType, mealNames, setMealNames)}
    >
      {children}
    </button>
  );
};

export default IncrementButton;
