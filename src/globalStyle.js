import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: 'Operator Mono';
    src: url('../fonts/Operator-Mono.ttf');
  }

  body {
    margin: 0;
  }

  * {
      box-sizing: border-box;
  }
`;
