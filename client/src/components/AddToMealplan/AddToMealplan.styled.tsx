import styled, { css } from 'styled-components';

const colorFromTheme = (color: string) => {
  return css`
    ${({ theme }) => theme.colors[color]}
  `;
};

const pageColor = colorFromTheme('pageColor');
const pageColorText = colorFromTheme('pageColorText');

export const Form = styled.form`
  display: flex;
  color: ${pageColorText};
  margin: 0 1em;
  margin-top: 1em;
  height: 100%;
  gap: 0.5em;
`;

export const Container = styled.div`
  width: 70%;
`;

export const SubmitButton = styled.button`
  border-radius: 0.3em;
  margin-top: 0.3em;
  height: 2em;
  font-size: 1.1em;
  width: 100%;
  color: ${pageColorText};
  background-color: #fff;
  border: 1px solid ${pageColor};
  border-right: 2px solid ${pageColor};
  border-bottom: 2px solid ${pageColor};
  cursor: pointer;
  white-space: nowrap;
`;
