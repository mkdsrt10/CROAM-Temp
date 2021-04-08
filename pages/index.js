import React from "react";
import { ThemeProvider } from "styled-components";

import Main from "../src/components/main";

import Navigation from "sections/Navigation";
import Banner from "sections/Banner";
import AboutClassic from "sections/About-classic";
import FeaturesClassic from "sections/Features-classic";
import FeaturesClassic2 from "sections/Features-classic2";
import FaqClassic from "sections/Faq-Classic";
import Integrations from "sections/Integrations";
import AppScreens from "sections/AppScreens-classic";
import Counter from "sections/Counters";
import Pricing from "sections/Pricing";
import Testimonial from "sections/Testimonial";
import News from "sections/News";
import Getapp from "sections/Getapp";
import Client from "sections/Client";
import Footer from "sections/Footer-classic";
import Contact from "sections/Contact"

import { GlobalStyle } from "sections/app.style";
import theme from "theme/classic/themeStyles";

const Home = () => (
  <ThemeProvider theme={theme}>
    <Main title="CRoam">
      <GlobalStyle />
      <Navigation />

      <Banner />
      <AppScreens />
      <AboutClassic />
      <FeaturesClassic />
      <FeaturesClassic2 />
      {/*<Testimonial />*/}
      {/*<Counter />*/}
      <Getapp />
      {/*<News />*/}
      {/*<Client />*/}
      <Contact />
      <Footer />
    </Main>
  </ThemeProvider>
);
export default Home;
