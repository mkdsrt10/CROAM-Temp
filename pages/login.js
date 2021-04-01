import React from "react";
import { ThemeProvider } from "styled-components";

import Main from "../src/components/main";

import Navigation from "sections/Navigation";
import Login from "sections/Login";
import Footer from "sections/Footer-classic";

import { GlobalStyle } from "sections/app.style";
import theme from "../src/reusecore/utils/theme";

const Home = () =>
{

    return (
        <ThemeProvider theme={theme}>
            <Main title="Appion React Gatsby nextjs landing">
                <GlobalStyle />
                <Login admin={false}/>
                <Footer />
            </Main>
        </ThemeProvider>
    )
};

export default Home;
