import React from "react";
import { createGlobalStyle } from "styled-components";
import Movies from "./components/Movies";

const GlobalStyle = createGlobalStyle`

  body {
    font-size: 20px;
    line-height: 1.5;
    margin: 50px;

    .react-datepicker__input-container input{
      width: 120px;
      height: 35px;
      font-size: 17px;
      padding-left: 12px;
      border-radius: 5px;

    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Movies />
    </>
  );
}

export default App;
