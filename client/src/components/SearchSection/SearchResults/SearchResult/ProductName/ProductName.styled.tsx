import styled from 'styled-components';

interface ProductNameProps {
  isHighlighted: boolean;
}

export const FullName = styled.p<ProductNameProps>`
  font-size: 0.7em;
  font-weight: 600;
  margin: auto 0;
  margin-left: 0.3em;
  max-width: 17em;
  padding-left: ${({ isHighlighted }) => !isHighlighted && '0.15em'};
  padding-right: 0.5em;
  white-space: nowrap;
  overflow: hidden;
`;

export const HighlightedCharacters = styled.span<ProductNameProps>`
  ${({ isHighlighted }) =>
    isHighlighted &&
    `
    background-color: rgb(219, 225, 232);
    border-radius: 0.2em 0 0 0.2em;
    padding: 0.25em 0;
    padding-left: 0.15em;
    padding-right: 0;
`}
`;
