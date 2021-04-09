import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";

import { FaPlay, FaDownload } from "react-icons/fa";

import AppScreenImage from "assets/images/classic/app-screen.png";
import AppScreenThumb1 from "assets/images/classic/app-screen-thumb-1.png";
import AppScreenThumb2 from "assets/images/classic/app-screen-thumb-2.png";
import mission from 'assets/images/classic/about/target.296fdb53.svg';
import vision from 'assets/images/classic/about/telescope.5a390a97.svg';

import BannerSectionWrapper from "./banner.style";
import CardExample from "../About-cards";

const Banner = () => {
  return (
    <BannerSectionWrapper id="about">
      <Container>
        <Row Vcenter={true}>
          <Col sm={12} >
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h1><span>About Us.</span></h1>
            </SectionTitle>            
          </Col>

          {/* <Col sm={12} sm={5}>
            <div className="app-screen-image-wrapper">
              <img src={"/main.jpeg"} alt="appion app screen" />
              <div className="thumb one">
                <img src={"/helpm.jpeg"} alt="appion app screen" />
              </div>
              <div className="thumb two">
                <img src={"help1.jpeg"} alt="appion app screen" />
              </div>
            </div>
          </Col> */}
        </Row>

        <Row>
          <Col sm={6}>
            <CardExample
              img={mission}
              title={"Mission"}
              text={"We aim to provide systems and solutions for personal safety and well-being through our innovative technology. We aim for 0% crime and 100% justice to all by designing efficient emergency response and alerting systems, ultimately moving towards a nation-wide standard emergency response system."}
            />
          </Col>
          <Col sm={6}>
            <CardExample
              img={vision}
              title={"Vision"}
              text={"We, AnjaneyaServices is a group concerned about the growing crimes. We believe that responsible communities are the backbone of a better and safer society. Thereby, our vision is to create a movement for change while empowering communities and enterprises by providing them technology based safety solutions."}
            />
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <SectionTitle UniWidth="65%">
              <h2>
                Roam carefree with <span>CRoam</span>.
              </h2>
            </SectionTitle>
          </Col>
          <p>
            CRoam is a smart wearable based safety system designed for the safety of an individuals. Running in the background, the system responses to the instinct of a person in emergency instantly without actually activating it when in the need. A sequence of action is initiated which attempt to protect the user against a potential hazard.
              We are looking forward for the acceptability of our solution. Filling <a href='https://docs.google.com/forms/d/e/1FAIpQLSe9awuK5mEsuCDYRN5GfNDoNWFgnkLPm9dEMtRBC3azV9n9IA/viewform'>this form</a> will not take more than two minutes. In return, you may be offered sample hardware/ beta release of the software/ both for free.
          </p>
        </Row>

        <Row>
          <div style={{display:"flex", margin: "0 auto"}}>
          <VintageBox right={true} vintageOne={true}>
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
