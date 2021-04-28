import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import { SlickSlider, SliderItem } from "reusecore/SlickSlider";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import screen1 from "assets/images/classic/screens/news1.png";
import screen2 from "assets/images/classic/screens/news2.png";
import screen3 from "assets/images/classic/screens/news3.png";
import screen4 from "assets/images/classic/screens/news4.png";
import screen5 from "assets/images/classic/screens/news5.png";
import screen6 from "assets/images/classic/screens/news6.png";
import screen7 from "assets/images/classic/screens/news7.png";
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
    prevArrow: <ArrowLeft />
  };
  return (
    <AppScreenSctionWrapper>
      <Container>
        <Row>
        <SectionTitle
          className="section-title"
          leftAlign={true}
          UniWidth="100%"
        >
          <h1>
            <span>Crime</span> OFF
          </h1>   
        </SectionTitle>
        </Row>
        <Row>
          <Col xs={12}>
            <SlickSlider {...settings}>
              <SliderItem key={"1"}>
                <div className="slider-item">
                  <img src={screen1} alt="img" width="100%" />
                  <div className = "slider-text">                  
                    <p>
                      CRoam, the next generation watchman.  
                    </p>
                  </div>
                </div>
              </SliderItem>
              <SliderItem key={"2"}>
              <div className="slider-item">
                  <img src={screen2} alt="img" width="100%" />
                  <div className = "slider-text">                  
                    <p>
                      With CRoam, you are never alone.
                    </p>
                  </div>
                </div>
              </SliderItem>
              <SliderItem key={"3"}>
              <div className="slider-item">
                  <img src={screen3} alt="img" width="100%" />
                  <div className = "slider-text">                  
                    <p>
                      Alert! CRoam is watching you...
                    </p>
                  </div>
                </div>
              </SliderItem>
              <SliderItem key={"4"}>
              <div className="slider-item">
                  <img src={screen4} alt="img" width="100%" />
                  <div className = "slider-text">                  
                    <p>
                      With CRoam, carry CCTV on your wrist.  
                    </p>
                  </div>
                </div>
              </SliderItem>
              <SliderItem key={"5"}>
              <div className="slider-item">
                  <img src={screen5} alt="img" width="100%" />
                  <div className = "slider-text">                  
                    <p>
                      Police will reach you before you reach police.
                    </p>
                  </div>
                </div>
              </SliderItem>
              <SliderItem key={"6"}>
              <div className="slider-item">
                  <img src={screen6} alt="img" width="100%" />
                  <div className = "slider-text">                  
                    <p>
                      With CRoam, help will be right there. 
                    </p>
                  </div>
                </div>
              </SliderItem>
              <SliderItem key={"7"}>
              <div className="slider-item">
                  <img src={screen7} alt="img" width="100%" />
                  <div className = "slider-text">                  
                    <p>
                      Roam carefree with CRoam. 
                    </p>
                  </div>
                </div>
              </SliderItem>
            </SlickSlider>
          </Col>
        </Row>
      </Container>
    </AppScreenSctionWrapper>
  );
};

export default AppScreensClassic;

