//
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global.js';
import theme from './styles/theme.js';
import { Routes } from './routes';
import { Navbar } from '../src/components/navBar';
import { Footer } from '../src/components/footer';
//
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Navbar />
      <Routes />
      <Footer />
    </ThemeProvider>
  </StrictMode>
);
//