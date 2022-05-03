import React from "react";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "styles/Theme";
import { Routes } from "router";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
