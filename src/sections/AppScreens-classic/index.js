import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import { SlickSlider, SliderItem } from "reusecore/SlickSlider";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import screen1 from "assets/images/classic/screens/screens-1.png";
import screen2 from "assets/images/classic/screens/screens-2.png";
import screen3 from "assets/images/classic/screens/screens-3.png";
import screen4 from "assets/images/classic/screens/screens-4.png";
import screen5 from "assets/images/classic/screens/screens-5.png";
import screen6 from "assets/images/classic/screens/screens-6.png";
import screen7 from "assets/images/classic/screens/screens-7.png";
import screen8 from "assets/images/classic/screens/screens-8.png";
import screen9 from "assets/images/classic/screens/screens-9.png";
import screen10 from "assets/images/classic/screens/screens-10.png";
import screen11 from "assets/images/classic/screens/screens-11.png";
import screen12 from "assets/images/classic/screens/screens-12.png";
import screen13 from "assets/images/classic/screens/screens-13.png";

import AppScreenSctionWrapper from "./appScreenSection.style";

const AppScreensClassic = () => {
  const ArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button {...props} className="slick-arrow slick-prev-icon">
      <IoIosArrowRoundBack />
    </button>
  );
  const ArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button {...props} className="slick-arrow slick-next-icon">
      <IoIosArrowRoundForward />
    </button>
  );
  const settings = {
    autoplay: true,
    infinite: true,
    dots: true,
    swipeToSlide: true,
    className: "center",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1025,
        settings: {

        },
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };
  return (
    <AppScreenSctionWrapper>
      <Container>
<<<<<<< HEAD
        <Row>
          <Col xs={12} sm={12}>
            <SectionTitle
              className="section-title-block"
              leftAlign={true}
              UniWidth="100%"
              mb={50}
            >
              <h2>
                <span>Everyone is effected by Crime. </span>
              </h2>
            </SectionTitle>
=======
        {/* <Row>
          <Col xs={12}>
            <div className="heading">
              Everyone is affected by crime.
            </div>
>>>>>>> 270e7b06764be828430352bd49d8fa1ae4492f21
          </Col>
        </Row> */}
        <Row>
          <Col xs={12}>
            <SlickSlider {...settings}>
              <SliderItem key={"1"}>
                <img src={screen1} alt="img" width="100%" />
              </SliderItem>
              <SliderItem key={"1"}>
                <img src={screen2} alt="img" width="100%" />
              </SliderItem>
              <SliderItem key={"1"}>
                <img src={screen3} alt="img" width="100%" />
              </SliderItem>
              <SliderItem key={"1"}>
                <img src={screen4} alt="img" width="100%" />
              </SliderItem>
              <SliderItem key={"1"}>
                <img src={screen5} alt="img" width="100%" />
              </SliderItem>
              <SliderItem key={"1"}>
                <img src={screen6} alt="img" width="100%" />
              </SliderItem>
              <SliderItem key={"1"}>
                <img src={screen7} alt="img" width="100%" />
              </SliderItem>
              <SliderItem key={"1"}>
                <img src={screen8} alt="img" width="100%" />
              </SliderItem>
              <SliderItem key={"1"}>
                <img src={screen9} alt="img" width="100%" />
              </SliderItem>
              <SliderItem key={"1"}>
                <img src={screen10} alt="img" width="100%" />
              </SliderItem>
              <SliderItem key={"1"}>
                <img src={screen12} alt="img" width="100%" />
              </SliderItem>
              <SliderItem key={"1"}>
                <img src={screen13} alt="img" width="100%" />
              </SliderItem>
            </SlickSlider>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12}>
            <SectionTitle
                className="section-title-block"
                leftAlign={true}
                UniWidth="100%"
                mb={50}
            >
              <h2 style={{marginTop:50}}>
                <span>We are here to solve these problem.</span>
              </h2>
            </SectionTitle>
          </Col>
        </Row>
      </Container>
    </AppScreenSctionWrapper>
  );
};

export default AppScreensClassic;

