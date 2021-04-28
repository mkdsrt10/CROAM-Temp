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
        <SectionTitle UniWidth="65%">
          <h2 style={{marginBottom: 30}}>
            <span>Crime at every corner.</span>
          </h2>
        </SectionTitle>
<<<<<<< HEAD
        CRoam is a smart wearable based safety system designed for the safety of an individuals. Running in the background, the system responses to the instinct of a person in emergency instantly without actually activating it when in the need. A sequence of action is initiated which attempt to protect the user against a potential hazard.
=======
        <div style={{display: "flex", justifyContent: "center", paddingBottom: 120}}>
          Safety has become a major concern today. 
          The possibility that a person may have to face an emergency situation, even at their own homes, is increasing continuously. Considerable loss of health and property has to be born by innocent people and in many cases, it is just a matter of seconds between life and death. 
          Criminals are getting more and more expert at committing crimes and leaving no evidence; and there is no point in seeking legal help without evidence. 
          This makes deserving victims devoid of justice.
        </div>
>>>>>>> 270e7b06764be828430352bd49d8fa1ae4492f21
      </Container>
    </AboutSectionWrapper>
  );
};

export default AboutClassic;
