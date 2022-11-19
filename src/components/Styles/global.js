import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
    ul, ol, li{
        list-style: none;
    }
    img{
        max-width: 100%;
    }
    input, select{
        background: transparent;
        border: none;
    } 
    :root{
        --primary: #dd0000;
        --primary2: #450000;
        --grey1: #333333;
        --grey2: #828282;
        --grey3: #E0E0E0;
        --white: #fff
    }
    body{

    }
    h1, h2, h3, h4, h5, h6, p, span, li{
        font-family: 'Inter', sans-serif;
}

.cartArea {
    width: 100%;
    max-width: 800px;
    height: 500px;
  }

  @media(min-width: 1100px){
    .cartArea {
    width: 45%;
    height: 700px;
  }
  }
`;
