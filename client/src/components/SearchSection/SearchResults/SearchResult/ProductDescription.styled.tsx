import styled from 'styled-components';

export const ProductDescription = styled.p`
  font-weight: 600;
  font-size: 0.6em;
  margin: auto 0;
  white-space: nowrap;
  padding-left: 0.5em;
  margin-right: 0.5em;
  overflow: hidden;

  &::first-letter {
    text-transform: uppercase;
  }
`;
