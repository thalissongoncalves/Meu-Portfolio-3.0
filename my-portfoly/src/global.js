import { createGlobalStyle } from 'styled-components'
import blackCursor from './assets/black-cursor.png';

export default createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    scrollbar-width: none;
    -ms-overflow-style: none;
    cursor: url(${blackCursor}), auto;
  }

  body::-webkit-scrollbar {
    display: none;
  }
`