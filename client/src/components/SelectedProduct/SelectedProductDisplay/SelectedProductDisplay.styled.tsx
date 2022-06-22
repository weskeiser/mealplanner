import styled, { css } from 'styled-components';

const pageColorText = css`
  ${({ theme }) => theme.colors.pageColorText}
`;

export const SelectedProductDisplay = styled.div`
  margin-left: 0.3em;
  display: grid;
  grid-template-columns: 3.5em 1fr;
  grid-template-rows: 2fr 1fr;

  img {
    width: 3.5em;
    height: 3em;
    grid-row: 1/3;
  }

  h2 {
    margin-left: 0.8em;
    color: ${pageColorText};
    font-size: 1.2em;
  }

  h3 {
    color: rgba(85, 130, 184, 0.6);
    margin-left: 1.65em;
    margin-top: -0.5em;
    font-size: 0.8em;
  }
`;

export const SourceAttribution = styled.a`
  font-size: 0.7em;
  display: block;
  margin-top: 0.5em;
  margin-bottom: 1.5em;

  &:visited,
  &:link {
    color: rgb(190, 190, 190);
  }
`;
