import styled, { css } from 'styled-components';

const colorFromTheme = (color: string) => {
  return css`
    ${({ theme }) => theme.colors[color]}
  `;
};

const pageColorText = colorFromTheme('pageColorText');
const dataInk = colorFromTheme('dataInk');
const dataInkText = colorFromTheme('dataInkText');

export const NutrientTable = styled.table`
  color: ${pageColorText};
  width: 100%;
  border-collapse: collapse;

  & > thead {
    font-size: 0.7em;
    color: ${dataInkText};
    font-weight: bold;

    & > tr :nth-child(1) {
      text-align: left;
    }

    & > tr :nth-child(2) {
      text-align: right;
    }
  }

  & > tbody {
    & > tr {
      & > td {
        padding: 0.2em 0.3em;
        &:first-child {
          border: 1px solid ${dataInk};
        }

        &:nth-child(2) {
          text-align: right;
          border: 1px solid ${dataInk};
        }
      }
    }
  }
`;
