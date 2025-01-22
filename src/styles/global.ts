import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0%;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme["base-background"]};
    -webkit-font-smoothing: antialiased;
  }
`;