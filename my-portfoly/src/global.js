import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  body::-webkit-scrollbar {
    display: none;
  }
`