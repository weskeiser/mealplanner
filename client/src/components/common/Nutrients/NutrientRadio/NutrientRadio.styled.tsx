import styled, { css } from "styled-components";

const pageColor = css`
  ${({ theme }) => theme.colors.pageColor}
`;

export const NutrientRadio = styled.form`
  display: flex;
  margin-top: 0.5em;

  & > input {
    appearance: none;
    width: 1.6em;
    height: 1.6em;
    border: 2px solid ${pageColor};
    border-radius: 1em;
    display: grid;
    place-content: center;
    margin: 0;

    &::before {
      content: "";
      width: 1em;
      height: 1em;
      border-radius: 1em;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em ${pageColor};
    }

    &:checked::before {
      transform: scale(1);
    }

    &:first-of-type {
      margin-left: auto;
      margin-right: 0.5em;
    }

    &:nth-of-type(3) {
      margin-right: auto;
      margin-left: 0.5em;
    }
  }
`;
