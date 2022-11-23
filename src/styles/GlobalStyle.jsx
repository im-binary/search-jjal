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

    body {
        background: linear-gradient(180deg, #ffffff, #1f043d);
    }
`;

export default GlobalStyle;
