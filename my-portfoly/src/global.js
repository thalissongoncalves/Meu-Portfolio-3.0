import { createGlobalStyle } from 'styled-components'
import background from './assets/background.png';
import pointerCursor from './assets/black-cursor-clique.png';

export default createGlobalStyle`
  *, body {
    background-color: white;
    background-image: url(${background});
    cursor: url(${pointerCursor}), auto;
    margin: 0;
    padding: 0;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  body::-webkit-scrollbar {
    display: none;
  }
`