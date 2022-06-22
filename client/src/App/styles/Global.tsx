import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#root {
  height: 100%;
}

html {
  height: 100%;
  font-family: 'Montserrat', sans-serif;
}

main {
  margin-bottom: 10em;
}

body {
  height: 100%;
  // REMOVE AFTER DEV
  touch-action: none;
}
`;

export default GlobalStyles;
