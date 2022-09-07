import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --background: #e5e5e5;
  --main-color: #1e1f25;
  --check-box: #292b35;
  --point-color: #9494b8;
  --font-color: #dadada;
  --hover-color: #35363d;
}
* {
  box-sizing: border-box;
  font-size: 16px;
  color: var(--font-color);
}

body {
  margin: 0;
  padding: 0;
}

`;

export default GlobalStyle;
