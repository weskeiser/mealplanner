import styled, { css } from 'styled-components';

const pageColor = css`
  ${({ theme }) => theme.colors.pageColor}
`;

export const SearchBar = styled.div`
  display: grid;

  & > input {
    grid-row: 1;
    grid-column: 1/3;
    width: 100%;
    height: 3em;
    padding-left: 0.5em;
    padding-top: 0.3em;
    border: none;
    border-top: 1px solid ${pageColor};
    border-bottom: 1px solid ${pageColor};
    color: ${pageColor};
    outline: none;
  }

  & > img {
    grid-row: 1;
    grid-column: 1/3;
    margin: auto 0;
    margin-left: auto;
    margin-right: 1em;
    opacity: 0.2;
    width: 1.3em;
    height: 1.3em;
  }
`;
