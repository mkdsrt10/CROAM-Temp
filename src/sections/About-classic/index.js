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
    <AboutSectionWrapper id="about">
      <Container>
        <SectionTitle UniWidth="65%">
          <h2>
            Roam carefree with <span>CRoam</span>.
          </h2>
        </SectionTitle>
        CRoam is a smart wearable based safety system designed for the safety of an individuals. Running in the background, the system responses to the instinct of a person in emergency instantly without actually activating it when in the need. A sequence of action is initiated which attempt to protect the user against a potential hazard.
        We are looking forward for the acceptability of our solution. Filling <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSe9awuK5mEsuCDYRN5GfNDoNWFgnkLPm9dEMtRBC3azV9n9IA/viewform'>this form</a> will not take more than two minutes. In return, you may be offered sample hardware/ beta release of the software/ both for free.
      </Container>
    </AboutSectionWrapper>
  );
};

export default AboutClassic;
