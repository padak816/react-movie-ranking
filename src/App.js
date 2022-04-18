import React from "react";
import { createGlobalStyle } from "styled-components";
import Movies from "./components/Movies";

const GlobalStyle = createGlobalStyle`

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    margin: 50px;
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
