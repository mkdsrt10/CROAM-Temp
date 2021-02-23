import React from "react";
import { ThemeProvider } from "styled-components";

import Main from "../src/components/main";

import Navigation from "sections/Navigation";
import Banner from "sections/Banner-hosting";
import About from "sections/About-hosting";
import Features from "sections/Features-hosting";
import CTAHosting from "sections/CTA-hosting";
import Faq from "sections/Faq-hosting";
import Counters from "sections/Counters";
import Pricing from "sections/Pricing";
import Testimonial from "sections/Testimonial";
import News from "sections/News";
import Contact from "sections/Contact";
import Footer from "sections/Footer";

import { GlobalStyle } from "sections/app.style";
import theme from "theme/hosting/themeStyles";

const Home = () => (
  <ThemeProvider theme={theme}>
    <Main title="Appion React Gatsby nextjs landing">
      <GlobalStyle />
      <Navigation />
      <Banner />
      <About />
      <Pricing />
      <Features />
      <CTAHosting />
      <Counters />
      <Testimonial />
      <Faq />
      <News />
      <Contact />
      <Footer />
    </Main>
  </ThemeProvider>
);

export default Home;
