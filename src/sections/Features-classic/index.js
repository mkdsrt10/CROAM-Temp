import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";

import Icon1 from "assets/images/classic/features/report.png";
import Icon2 from "assets/images/classic/features/sos.png";
import Icon3 from "assets/images/classic/features/inform.png";
import Icon4 from "assets/images/classic/features/cctv.png";
import Icon5 from "assets/images/classic/features/voice.png";
import Icon6 from "assets/images/classic/features/robot.png";
import Icon7 from "assets/images/classic/features/rtreport.png"
import Icon8 from "assets/images/classic/features/hammer.png";
import Icon9 from "assets/images/classic/features/police.png";

import FeturesSectionWrapper from "./fetures.style";
import { height } from "styled-system";

const FeaturesClassic = () => {
  return (
    <FeturesSectionWrapper id="features">
      <div className="top-shadow-left"></div><div className="top-shadow-right"></div>
      <Container>
        <SectionTitle UniWidth="65%">
          <h2>
            <span>Features</span>
            What<span> CROAM </span>app do
          </h2>
        </SectionTitle>

        <Row>
          <Col xs={12} sm={6} >
            <div className="fetures-block">
              <div className="features-icon">
              </div>
              <h3>SOS button enabled</h3>
              <p>
                Three click power button to initiate the emergency response.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} >
            <div className="fetures-block">
              <div className="features-icon">
              </div>
              <h3>Voice based initaiation</h3>
              <p>
                If you feel you are in an emergency situation shout "Help" or "Bachao" to initiate the response.
              </p>
            </div>
          </Col>
          {/* <Col xs={12} sm={6} >
            <div className="fetures-block">
              <div className="features-icon">
                <img src={Icon4} alt="prime app features icon" />
              </div>
              <h3>Take photos of criminals</h3>
              <p>
                CROAM app will take images of your surrounding and submit it as a proof of crime.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} >
            <div className="fetures-block">
              <div className="features-icon">
                <img src={"/family.png"} alt="prime app features icon" />
              </div>
              <h3>Keep family/police informed</h3>
              <p>
                Any incidents can be reported and your family members will be informed immediatedly.
              </p>
            </div>
          </Col>    
        </Row>
      </Container>

      <div style={{ height: "10vh" }}></div>

      <Container>
        <SectionTitle UniWidth="65%">
          <h2>
            <span>Smart Police</span>
          </h2>
        </SectionTitle>
        <Row>
          <Col xs={12} sm={4} md={4}>
            <div className="fetures-block">
              <div className="features-icon">
                <img src={Icon7} alt="prime app features icon" />
              </div>
              <h3>Get real time reports</h3>
              <p>
                Get real time reports of incidents happening near by with contact number, location and proof.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={4} md={4}>
            <div className="fetures-block">
              <div className="features-icon">
              <p>
                CRoam app collects the proof of incidents and hence reduces time to collect incidents proof.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={4} md={4}>
            <div className="fetures-block">
              <div className="features-icon">
              </div>
              <h3>Keep the society crime free</h3>
              <p>
                With CRoam security people will have better trust in society and police because they can get instant help from police anywhere.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bottom-shadow-left"></div><div className="bottom-shadow-right"></div>
    </FeturesSectionWrapper>
  );
};

export default FeaturesClassic;
