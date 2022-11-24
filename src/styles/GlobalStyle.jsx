import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: 'Cafe24Ssurround';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Cafe24Ssurround';
    }

    :root {
        font-size: 10px;
    }

    body {
        background: linear-gradient(180deg, #ffffff, #1f043d);
    }

    button {
        border: 0;
        background-color: transparent;
        padding: 0;
        font-family: inherit;
        font-size: inherit;
        appearance: none;
        cursor: pointer;
        color: inherit;
    }
`;

export default GlobalStyle;
