import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";

import { FaPlay, FaDownload } from "react-icons/fa";

import AppScreenImage from "assets/images/classic/app-screen.png";
import AppScreenThumb1 from "assets/images/classic/app-screen-thumb-1.png";
import AppScreenThumb2 from "assets/images/classic/app-screen-thumb-2.png";

import BannerSectionWrapper from "./herotwo.style";

const Herotwo = () => {
    return (
        <BannerSectionWrapper id="banner">
            <Container>
                <Row Vcenter={true}>
                    <Col sm={12}>
                        <SectionTitle
                            className="section-title"
                            rightAlign={true}
                            UniWidth="100%"
                        >
                            <h1>
                                <span>Crime</span> OFF
                            </h1>   
                        </SectionTitle>
                    </Col>
                </Row>
            </Container>
        </BannerSectionWrapper>
    );
};

export default Herotwo;
