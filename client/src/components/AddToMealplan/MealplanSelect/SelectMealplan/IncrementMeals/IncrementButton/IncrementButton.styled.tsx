import styled from 'styled-components';

export const IncrementButton = styled.button`
  cursor: pointer;
  font-size: 1.3em;
  border: 0;
  color: rgb(14, 172, 14);
  background-color: #fff;
  width: 50%;
  margin-top: 0.2em;

  &:nth-of-type(1) {
    padding-left: 0.3em;
    color: rgb(188, 85, 85);
  }

  &:nth-of-type(2) {
    padding-right: 0.3em;
  }
`;
