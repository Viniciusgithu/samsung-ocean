import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  body {
    background-color: #123142;
    color: #f2e8c4;
  }

  html {
    font-size: 62.5%;
  }

  img {
    max-width: 100%;
    display: block;
  }

`

export default GlobalStyle