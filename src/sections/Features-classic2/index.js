import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";

import Icon1 from "assets/images/classic/features/01.svg";
import Icon2 from "assets/images/classic/features/02.svg";
import Icon3 from "assets/images/classic/features/03.svg";
import Icon4 from "assets/images/classic/features/04.svg";
import Icon5 from "assets/images/classic/features/05.svg";
import Icon6 from "assets/images/classic/features/06.svg";

import FeturesSectionWrapper from "./fetures.style";

const FeaturesClassic = () => {
  return (
    <FeturesSectionWrapper id="features">
      <Container>
        <SectionTitle UniWidth="65%">
          <h2>
            Why <span> Police </span>need CRoam
          </h2>
        </SectionTitle>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">
              <div className="features-icon">
                <img src={"/siren.png"} alt="prime app features icon" />
              </div>
              <h3>Get real time reports</h3>
              <p>
                Get real time reports of incidents happening near by with contact number, location and proof.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">
              <div className="features-icon">
                <img src={"/hammer.png"} alt="prime app features icon" />
              </div>
              <h3>Solve cases quickly</h3>
              <p>
                CRoam app collects the proof of incidents and hence reduces time to collect incidents proof.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">
              <div className="features-icon">
                <img src={"/trainee.png"} alt="prime app features icon" />
              </div>
              <h3>Keep the society crime free</h3>
              <p>
                With CRoam security people will have better trust in society and police because they can get instant help from police anywhere.
              </p>
            </div>
          </Col>
          {/*<Col xs={12} sm={6} md={4}>*/}
          {/*  <div className="fetures-block">*/}
          {/*    <div className="features-icon">*/}
          {/*      <img src={Icon6} alt="prime app features icon" />*/}
          {/*    </div>*/}
          {/*    <h3>Feature 6</h3>*/}
          {/*    <p>*/}
          {/*      Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do*/}
          {/*      eiusmod tempor incididunt.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</Col>*/}
        </Row>
      </Container>
    </FeturesSectionWrapper>
  );
};

export default FeaturesClassic;
