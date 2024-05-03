import { createGlobalStyle } from 'styled-components'
import background from './assets/background.png';

export default createGlobalStyle`
  *, body {
    background-image: url(${background});
    margin: 0;
    padding: 0;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  body::-webkit-scrollbar {
    display: none;
  }
`