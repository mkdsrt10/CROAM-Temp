import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";

import { FaPlay, FaDownload } from "react-icons/fa";

import AppScreenImage from "assets/images/classic/app-screen.png";
import AppScreenThumb1 from "assets/images/classic/app-screen-thumb-1.png";
import AppScreenThumb2 from "assets/images/classic/app-screen-thumb-2.png";

import BannerSectionWrapper from "./banner.style";

const Banner = () => {
  return (
    <BannerSectionWrapper id = "banner">
      <Container>
        <Row Vcenter={true}>
          <Col sm={12} sm={7}>
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h1>
                <span>CRoam</span> on <br></br> Crime off
              </h1>
              <h4>
                <span> Carefree Roaming</span> 
              </h4>
            </SectionTitle>
            <p>
            Safety has become a major concern today. The possibility that a person may have to face an emergency situation, even at their own homes, is increasing continuously. Considerable loss of health and property has to be born by innocent people and in many cases, it is just a matter of seconds between life and death. Criminals are getting more and more expert at committing crimes and leaving no evidence; and there is no point in seeking legal help without evidence. This makes deserving victims devoid of justice.
            <br></br><br></br>
            We, AnjaneyaServices is a group which is concerned about these issues. We provide systems and solutions for personal safety and well-being. Through our innovative sytsems, we aim 0% crime and 100% justice to all. We provide efficient emergency response and alerting systems and are aiming towards a nation-wide standard emergency response system.
            </p>

            <VintageBox right={true} vintageOne={true}>
              <Button className="banner-btn one" primary>
                <FaDownload className="icon-left" />
                Download V1.4
              </Button>
              <Button className="banner-btn two" secondary>
                <FaPlay className="icon-left" /> Watch Now
              </Button>
            </VintageBox>
          </Col>

          <Col sm={12} sm={5}>
            <div className="app-screen-image-wrapper">
              <img src={AppScreenImage} alt="appion app screen" />
              <div className="thumb one">
                <img src={AppScreenThumb1} alt="appion app screen" />
              </div>
              <div className="thumb two">
                <img src={AppScreenThumb2} alt="appion app screen" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </BannerSectionWrapper>
  );
};

export default Banner;
