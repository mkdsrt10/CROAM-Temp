import React from "react";
import { ThemeProvider } from "styled-components";

import Main from "../src/components/main";

import Navigation from "sections/Navigation";
import Login from "sections/Login";
import Footer from "sections/Footer-classic";
import FeaturesClassic2 from "sections/Features-classic2";

import { GlobalStyle } from "sections/app.style";
import theme from "../src/reusecore/utils/theme";

const Home = () =>
{

    return (
        <ThemeProvider theme={theme}>
            <Main title="Appion React Gatsby nextjs landing">
                <GlobalStyle />
                <FeaturesClassic2 />
                <Login admin={true}/>
                <Footer />
            </Main>
        </ThemeProvider>
    )
};

export default Home;
