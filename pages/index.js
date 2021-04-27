import React from "react";
import { ThemeProvider } from "styled-components";

import Main from "../src/components/main";

import Navigation from "sections/Navigation";
import Banner from "sections/Banner";
import AboutClassic from "sections/About-classic";
import FeaturesClassic from "sections/Features-classic";
import FaqClassic from "sections/Faq-Classic";
import Integrations from "sections/Integrations";
import AppScreens from "sections/AppScreens-classic";
import Counter from "sections/Counters";
import BannerModern from "sections/Banner-modern"
import Testimonial from "sections/Testimonial";
import News from "sections/News";
import Getapp from "sections/Getapp";
import Client from "sections/Client";
import Footer from "sections/Footer-classic";
import Contact from "sections/Contact";
import Hero from "sections/Hero";
import Herotwo from "sections/Herotwo";
import TeamSection from "../src/sections/Team";

import { GlobalStyle } from "sections/app.style";
import theme from "theme/classic/themeStyles";


const Home = () => (
  <ThemeProvider theme={theme}>
    <Main title="CRoam">
      <GlobalStyle />
      <Navigation />
      <Hero />
      <AboutClassic />
      <Herotwo />
      <Banner />
      <AppScreens />
      <BannerModern />
      <FeaturesClassic />
      {/* <Testimonial /> */}
      {/*<Counter />*/}
      <Getapp />
      {/*<News />*/}
      {/*<Client />*/}
      <TeamSection />
      <Contact />
      <Footer />
    </Main>
  </ThemeProvider>
);
export default Home;
