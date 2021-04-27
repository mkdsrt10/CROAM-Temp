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
        {/* <div style={{display: "flex", justifyContent: "center", paddingBottom: 120}}>
          Safety has become a major concern today. 
          The possibility that a person may have to face an emergency situation, even at their own homes, is increasing continuously. Considerable loss of health and property has to be born by innocent people and in many cases, it is just a matter of seconds between life and death. 
          Criminals are getting more and more expert at committing crimes and leaving no evidence; and there is no point in seeking legal help without evidence. 
          This makes deserving victims devoid of justice.
        </div> */}
      </Container>
    </AboutSectionWrapper>
  );
};

export default AboutClassic;
