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
    <BannerSectionWrapper id="about">
      <Container>
        <Row Vcenter={true}>
          <Col sm={12} >
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
<<<<<<< HEAD
              <h1>
                <span>CRoam</span> on <br></br> Crime off
              </h1>
              <h4>
                <span> Carefree Roaming</span>
              </h4>
            </SectionTitle>
            <p>
              <br></br><br></br>
              Safety has become a major concern today. We, AnjaneyaServices is a group which is concerned about these issues. We provide systems and solutions for personal safety and well-being. Through our innovative sytsems, we aim 0% crime and 100% justice to all. We provide efficient emergency response and alerting systems and are aiming towards a nation-wide standard emergency response system.
            {/*Safety has become a major concern today. The possibility that a person may have to face an emergency situation, even at their own homes, is increasing continuously. Considerable loss of health and property has to be born by innocent people and in many cases, it is just a matter of seconds between life and death. Criminals are getting more and more expert at committing crimes and leaving no evidence; and there is no point in seeking legal help without evidence. This makes deserving victims devoid of justice.*/}
            {/*<br></br><br></br>*/}

            {/*We, AnjaneyaServices is a group which is concerned about these issues. We provide systems and solutions for personal safety and well-being. Through our innovative sytsems, we aim 0% crime and 100% justice to all. We provide efficient emergency response and alerting systems and are aiming towards a nation-wide standard emergency response system.*/}
            </p>

            <VintageBox right={true} vintageOne={true}>
              <Button onClick={() => {window.open("https://docs.google.com/forms/d/e/1FAIpQLSe9awuK5mEsuCDYRN5GfNDoNWFgnkLPm9dEMtRBC3azV9n9IA/viewform")}} className="banner-btn one" primary>
                <FaDownload className="icon-left" />
                Get early beta access
              </Button>
              {/*<Button className="banner-btn two" secondary>*/}
              {/*  <FaPlay className="icon-left" /> Watch Now*/}
              {/*</Button>*/}
            </VintageBox>
=======
              <h1><span>About Us.</span></h1>
            </SectionTitle>            
>>>>>>> 270e7b06764be828430352bd49d8fa1ae4492f21
          </Col>

          {/* <Col sm={12} sm={5}>
            <div className="app-screen-image-wrapper">
              <img src={"/1.png"} alt="appion app screen" />
              <div className="thumb one">
                <img src={"/2.png"} alt="appion app screen" />
              </div>
              {/*<div className="thumb two">*/}
              {/*  <img src={"help1.jpeg"} alt="appion app screen" />*/}
              {/*</div>*/}
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
      </Container>
    </BannerSectionWrapper>
  );
};

export default Banner;
