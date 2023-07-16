import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color: #3966ad;
        --secundary-color: #5293FA;
        --icon-color: #13223B;
        --color-complementary: #000;
        --modal-color: #6EA5FF;
        --tags-background: #FAC352;
        --tags-color: #63470b;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
`