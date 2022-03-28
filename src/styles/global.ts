import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --pink-primary: #B22E6F;
        --pink-secondary: #AB2680;
        --white: #FFFFFF;
        --black: #333333;
        --gray: #999999;
    }

    *{
        margin:0;
        padding: 0;
        border: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        font-family: 'Heebo';
    }


    button:hover{
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        width: 4px;
        height: 15px;
        border-radius: 30px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
        background: #ab2680;
        border-radius: 30px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

`