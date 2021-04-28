import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";

import Icon1 from "assets/images/classic/features/police-car.png";
import Icon2 from "assets/images/classic/features/bullhorn.png";
import Icon3 from "assets/images/classic/features/family.png";
import Icon4 from "assets/images/classic/features/cctv.png";
import Icon5 from "assets/images/classic/features/walkie-talkie.png";
import Icon6 from "assets/images/classic/features/robot.png";
import Icon7 from "assets/images/classic/features/siren.png"
import Icon8 from "assets/images/classic/features/hammer.png";
import Icon9 from "assets/images/classic/features/trainee.png";

import FeturesSectionWrapper from "./fetures.style";
import { height } from "styled-system";

const FeaturesClassic = () => {
  return (
    <FeturesSectionWrapper id="features">
      <div className="top-shadow-left"></div><div className="top-shadow-right"></div>
      <Container>
        <SectionTitle UniWidth="65%">
          <h2>
<<<<<<< HEAD
            What<span> CROAM </span>app do
=======
            What <span>CROAM </span> can do.
>>>>>>> 270e7b06764be828430352bd49d8fa1ae4492f21
          </h2>
        </SectionTitle>

        <Row>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">
              <div className="features-icon">
<<<<<<< HEAD
                <img src={"/police-car.png"} alt="prime app features icon" />
=======
                <img src={Icon2} alt="prime app features icon" />
>>>>>>> 270e7b06764be828430352bd49d8fa1ae4492f21
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
<<<<<<< HEAD
                <img src={"/bullhorn.png"} alt="prime app features icon" />
=======
                <img src={Icon5} alt="prime app features icon" />
>>>>>>> 270e7b06764be828430352bd49d8fa1ae4492f21
              </div>
              <h3>Voice based initaiation</h3>
              <p>
                If you feel you are in an emergency situation shout "Help" or "Bachao" to initiate the response.
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
<<<<<<< HEAD
                <img src={"/family.png"} alt="prime app features icon" />
=======
                <img src={Icon6} alt="prime app features icon" />
              </div>
              <h3>Detect emergeny situations</h3>
              <p>
                The degree of emergency is detected by analysing the captured images through state of the art Machine Learning techniques.
              </p>
            </div>
          </Col>
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
                <img src={Icon3} alt="prime app features icon" />
>>>>>>> 270e7b06764be828430352bd49d8fa1ae4492f21
              </div>
              <h3>Keep family informed</h3>
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
            Why <span>Police</span> need <span>CROAM</span>.
          </h2>
        </SectionTitle>
        <Row>
          <Col xs={12} sm={6} md={4}>
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
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">
              <div className="features-icon">
<<<<<<< HEAD
                <img src={"/cctv.png"} alt="prime app features icon" />
              </div>
              <h3>Capture the proof</h3>
=======
                <img src={Icon8} alt="prime app features icon" />
              </div>
              <h3>Solve cases quickly</h3>
>>>>>>> 270e7b06764be828430352bd49d8fa1ae4492f21
              <p>
                CRoam app collects the proof of incidents and hence reduces time to collect incidents proof.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">
              <div className="features-icon">
<<<<<<< HEAD
                <img src={"/walkie-talkie.png"} alt="prime app features icon" />
=======
                <img src={Icon9} alt="prime app features icon" />
>>>>>>> 270e7b06764be828430352bd49d8fa1ae4492f21
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
