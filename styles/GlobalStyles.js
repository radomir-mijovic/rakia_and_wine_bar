import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    width: 100%;
    height: 100%;
    -webkit-tap-highlight-color: transparent;
    font-family: 'Oswald', sans-serif;
    //font-family: 'Open Sans', cursive;
  }
  
  p {
    color: #CCB5AC;
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    margin-bottom: 1rem;
  }
`