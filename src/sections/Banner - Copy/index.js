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
              UniWidth="100%"
            >
            <h2>
              <span>Team</span> behind CRoam.
            </h2>
            </SectionTitle>            
          </Col>
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
    </TeamSectionWrapper>
  );
};

export default TeamSection;
