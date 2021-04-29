import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";

import aboutIcon1 from "assets/images/classic/about/icon-1.svg";
import aboutIcon2 from "assets/images/classic/about/icon-2.svg";
import aboutIcon3 from "assets/images/classic/about/icon-3.svg";

import AboutSectionWrapper from "./about.style";

const AboutClassic = () => {
  return (
    <AboutSectionWrapper >
      <Container>
        <SectionTitle UniWidth="100%">
          <h2 style={{marginTop: 80, marginBottom: 80}}>
            <span style={{fontWeight:600, fontSize: "120%"}}>The next generation watchman.</span>
          </h2>
        </SectionTitle>
      </Container>
    </AboutSectionWrapper>
  );
};

export default AboutClassic;
