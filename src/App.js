import React from "react";
import { createGlobalStyle } from "styled-components";
import Movies from "./components/Movies";
import("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");

const GlobalStyle = createGlobalStyle`

  body {
    font-family: "Noto Sans KR", sans-serif;
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
