import React from "react";
import { ThemeProvider } from "styled-components";
import Main from "../src/components/main";

import Navigation from "sections/Navigation";
import BlogSinglePage from "sections/Blog-single";
import Footer from "sections/Footer";

import { GlobalStyle } from "sections/app.style";
import theme from "theme/blog/themeStyles";

const Home = () => (
  <ThemeProvider theme={theme}>
    <Main title="Appion React Gatsby nextjs landing">
      <GlobalStyle />
      <Navigation />
      <BlogSinglePage />
      <Footer />
    </Main>
  </ThemeProvider>
);

export default Home;
