import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #FFFEFC;
    color: #635efb;
    -webkit-font-smoothing: antialiased;
    font: 400 16px Poppins, sans-serif;
  }


  body, input, button {
    font-family: Poppins;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
    border: 0;
    background: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #635efb;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  :root, #modal-root {
    font-size: var(--font-size);
  }
`;
