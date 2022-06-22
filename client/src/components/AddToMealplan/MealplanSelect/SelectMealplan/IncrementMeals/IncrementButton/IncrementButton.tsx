import { Dispatch, FC, SetStateAction } from 'react';

import incrementMeals from './helpers/incrementMeals';

import * as Styled from './IncrementButton.styled';

interface IncrementButtonProps {
  incrementType: string;
  children: string;
  mealNames: string[];
  setMealNames: Dispatch<SetStateAction<string[]>>;
}

const IncrementButton: FC<IncrementButtonProps> = ({
  incrementType,
  mealNames,
  setMealNames,
  children,
}) => {
  return (
    <Styled.IncrementButton
      onClick={(e) => incrementMeals(e, incrementType, mealNames, setMealNames)}
    >
      {children}
    </Styled.IncrementButton>
  );
};

export default IncrementButton;
