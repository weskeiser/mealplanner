import styled from 'styled-components';

export const SelectMealplan = styled.div`
  width: 10em;

  & + hr {
    border: 1px solid ${({ theme }) => theme.colors.mealBackground};
  }
`;
