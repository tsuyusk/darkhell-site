import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    height: 100%;
    width: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${props => props.theme.background};
  }

  input,
  body,
  textarea {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
