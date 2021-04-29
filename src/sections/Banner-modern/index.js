import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";

import { FaPlay, FaDownload } from "react-icons/fa";

import AppScreens from "../AppScreens-classic";
import mission from 'assets/images/classic/about/target.296fdb53.svg';
import vision from 'assets/images/classic/about/telescope.5a390a97.svg';

import BannerSectionWrapper from "./banner.style";
import CardExample from "../About-cards";

const Banner = () => {
  return (
    <BannerSectionWrapper>
      <Container>
           
        <Row>
          <Col sm={12}>
            <SectionTitle UniWidth="65%">
              <h2 style={{color: "white"}}>
                Roam carefree with <span>CRoam</span>.
              </h2>
            </SectionTitle>
          </Col>
          <p style={{margin: "0 auto", width: "60%", textAlign: "center", color: "white"}}>
          CRoam is a smart wearable based safety system designed for the safety of an individual. Running in the background, the system responds to the instinct of a person in emergency instantly when in need. Once initiated, the system will start capturing the scene along with location for submission to police, family and our AI-ML system for scene analysis.
            {/* CRoam is a smart wearable based safety system designed for the safety of an individuals. Running in the background, the system responses to the instinct of a person in emergency instantly without actually activating it when in the need. A sequence of action is initiated which attempt to protect the user against a potential hazard.
              We are looking forward for the acceptability of our solution. Filling <a href='https://docs.google.com/forms/d/e/1FAIpQLSe9awuK5mEsuCDYRN5GfNDoNWFgnkLPm9dEMtRBC3azV9n9IA/viewform'>this form</a> will not take more than two minutes. In return, you may be offered sample hardware/ beta release of the software/ both for free. */}
          </p>
        </Row>

        <Row>
          <div style={{display:"flex", margin: "0 auto"}}>
          <VintageBox right={true} vintageTwo={true}>
            <Button onClick={() => { window.open("https://docs.google.com/forms/d/e/1FAIpQLSe9awuK5mEsuCDYRN5GfNDoNWFgnkLPm9dEMtRBC3azV9n9IA/viewform") }} className="banner-btn one" primary>
              <FaDownload className="icon-left" />
                Get early beta access
              </Button>
            {/*<Button className="banner-btn two" secondary>*/}
            {/*  <FaPlay className="icon-left" /> Watch Now*/}
            {/*</Button>*/}
          </VintageBox>
          </div>
        </Row>
      </Container>
    </BannerSectionWrapper>
  );
};

export default Banner;
