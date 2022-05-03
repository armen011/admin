import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box; 
    font-family: Montserrat;
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }

  
`;

export default GlobalStyle;
