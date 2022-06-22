import styled from 'styled-components';

export const StyledSection = styled.section`
  margin-left: 1em;
  margin-top: 1em;
  min-height: 5em;

  & > p {
    font-size: 0.7em;
    width: 100%;
  }
`;

export const StyledErrorMessage = styled.p`
  color: red;
`;

export const StyledSuccessMessage = styled.p`
  color: rgb(52, 182, 52);
`;
