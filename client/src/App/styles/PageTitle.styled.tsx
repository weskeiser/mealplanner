import styled from 'styled-components';

export const PageTitle = styled.h1`
  text-align: center;
  font-size: 1.5em;
  padding: 0.4em 0;
  padding-top: 0.5em;
  color: ${({ theme }) => theme.colors.pageColorText};
`;
