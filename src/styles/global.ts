import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


*{
    margin: 0;
    padding: 0;;
    box-sizing: border-box;
}

html {
    @media (max-width: 1000px) {
        font-size: 93.75%;  //cada pixel equivale a 6.25%
    }
    @media (max-width: 720px) {
        font-size: 87.5%large;
    }

}

`