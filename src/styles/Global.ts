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
    min-height: 100%;
    width: 100%;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${props => props.theme.background};
  }

  input,
  body,
  textarea,
  button {
    font-size: 1.6rem;
    color: ${props => props.theme.text};
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
