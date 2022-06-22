import styled from 'styled-components';

interface FieldsetProps {
  highlighted: boolean | undefined;
  disabled: boolean | undefined;
}

export const Fieldset = styled.fieldset<FieldsetProps>`
  border: none;
  background-color: #fff;
  color: rgb(131, 162, 213);
  display: grid;
  grid-template-columns: 1fr;
  height: 2em;

  & > input,
  & > label {
    margin: auto 0;
    grid-row: 1;
    grid-column: 1;
    width: 100%;
    border-radius: 0.3em;
  }

  & > input {
    opacity: 0;
    cursor: pointer;

    ${({ disabled }) =>
      disabled &&
      `
        pointer-events: none;
      `}

    &:focus-visible {
      opacity: 100;
      outline: 4px solid rgb(75, 75, 255);
    }
  }

  & > label {
    padding: 0.25em 0.4em;

    ${({ highlighted }) =>
      highlighted &&
      `
        background-color: rgb(226, 242, 252);
        background-color: rgb(144, 213, 255);
        color: rgb(245, 249, 255);
        border: 1px solid rgb(151, 181, 230);
      `}
  }

  & > * {
    ${({ disabled }) =>
      disabled &&
      `
        background-color: rgb(247, 247, 247);
        color: rgb(209, 209, 209);
      `}
  }
`;
