import React from "react";
import { ThemeProvider } from "styled-components";

import Main from "../src/components/main";

import Navigation from "sections/Navigation";
import Login from "sections/LoginAdmin";
import Footer from "sections/Footer-classic";

import { GlobalStyle } from "sections/app.style";
import theme from "../src/reusecore/utils/theme";
import FeaturesClassic from "../src/sections/Features-classicAdmin";

const Home = ({setUser, setToken, setType}) =>
{

    return (
        <ThemeProvider theme={theme}>
            <Main title="Appion React Gatsby nextjs landing">
                <GlobalStyle />
                <Login setType={setType} setToken={setToken} setUser={setUser} admin={true}/>
                <FeaturesClassic />
                <Footer />
            </Main>
        </ThemeProvider>
    )
};

export default Home;
