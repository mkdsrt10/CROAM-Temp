import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";

import { FaPlay, FaDownload } from "react-icons/fa";

import AppScreenImage from "assets/images/classic/app-screen.png";
import AppScreenThumb1 from "assets/images/classic/app-screen-thumb-1.png";
import AppScreenThumb2 from "assets/images/classic/app-screen-thumb-2.png";
import Pic1 from 'assets/images/classic/lk.png';
import Pic2 from 'assets/images/classic/pap.png';
import Pic3 from 'assets/images/classic/at.png';

import TeamSectionWrapper from "./team.style";
import CardExample from "../Team-cards";

const TeamSection = () => {
  return (
    <TeamSectionWrapper id="team">
      <Container>
        <Row Vcenter={true}>
          <Col sm={12} >
            <SectionTitle
              className="section-title"
              UniWidth="65%"
            >
            <h2>
              <span>Team</span> behind CRoam.
            </h2>
            </SectionTitle>            
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <CardExample
              img={Pic1}
              title={"Dr. Lalan Kumar"}
              text={"Assistant Professor"}
              dept={"Electrical Engineering"}
              affiliation={"IIT Delhi"}
            />
          </Col>
          <Col sm={4}>
            <CardExample
              img={Pic2}
              title={"Dr. Prathosh A P"}
              text={"Assistant Professor"}
              dept={"Electrical Engineering"}
              affiliation={"IIT Delhi"}
            />
          </Col>
          <Col sm={4}>
            <CardExample
              img={Pic3}
              title={"Ayush Tripathi"}
              text={"Ph.D. Student"}
              dept={"Electrical Engineering"}
              affiliation={"IIT Delhi"}
            />
          </Col>
        </Row>
      </Container>
    </TeamSectionWrapper>
  );
};

export default TeamSection;
