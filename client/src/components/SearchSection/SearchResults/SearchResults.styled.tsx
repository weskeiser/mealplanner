import styled, { css } from 'styled-components';

const pageColor = css`
  ${({ theme }) => theme.colors.pageColor}
`;

const pageColorText = css`
  ${({ theme }) => theme.colors.pageColorText}
`;

const pageColorLighter = css`
  ${({ theme }) => theme.colors.pageColorLigher}
`;

export const SearchResults = styled.ul`
  position: absolute;
  font-size: 1.2em;
  line-height: 1.5em;
  color: #fff;
  width: 100%;

  & > li {
    background-color: ${pageColor};
    background-color: #fff;
    color: ${pageColorText};
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid ${pageColor};
    height: 1.9em;

    &:focus {
      background-color: ${pageColorLighter};
      outline: none;
    }
  }
`;
