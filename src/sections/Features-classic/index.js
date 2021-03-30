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
            <span>Features </span> in our application.
          </h2>
        </SectionTitle>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">
              <div className="features-icon">
                <img src={Icon1} alt="prime app features icon" />
              </div>
              <h3>Report Incident Instantly</h3>
              <p>
                Through CROAM you can report any criminal incidents instantly to the local authorities.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">
              <div className="features-icon">
                <img src={Icon2} alt="prime app features icon" />
              </div>
              <h3>SOS button enabled</h3>
              <p>
                Three click power button to initiate the emergency response.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">
              <div className="features-icon">
                <img src={Icon3} alt="prime app features icon" />
              </div>
              <h3>Keep family informed</h3>
              <p>
                Any incidents can be reported and your family members will be informed immediatedly.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
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
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">
              <div className="features-icon">
                <img src={Icon5} alt="prime app features icon" />
              </div>
              <h3>Voice based initaiation</h3>
              <p>
                If you feel you are in an emergency situation shout "Help" or "Bachao" to initiate the response.
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
