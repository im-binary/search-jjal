import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: linear-gradient(90deg, #624479, #1f043d);
    }
`;

export default GlobalStyle;
