import styled from "styled-components";

export const Section = styled.section`
  margin: 0 1em;
  margin-top: 2em;

  & > hr {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.pageColor};
    margin-top: 1em;
  }
`;
