import React from "react";
import { createGlobalStyle } from "styled-components";
import Movies from "./components/Movies";

const GlobalStyle = createGlobalStyle`

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    margin: 50px;

    .react-datepicker__input-container input{
      width: 100px;
      height:25px;
      font-size: 15px;
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
