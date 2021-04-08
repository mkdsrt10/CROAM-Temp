import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "reusecore/Layout";
import { DiAppstore } from "react-icons/di";
import { FaGooglePlay } from "react-icons/fa";

import AppSecreenImage from "assets/images/app/get-app/get-app-screen.png";
import particle1 from "assets/images/app/particle/09.png";
import particle2 from "assets/images/app/particle/10.png";
import particle3 from "assets/images/app/particle/11.png";
import particle4 from "assets/images/app/particle/13.png";

import GetAppSectionWrap from "./getAppSection.style";

const GetApp = () => {
  return (
    <GetAppSectionWrap>
      <img className="section__particle one" src={particle1} alt="img" />
      <img className="section__particle two" src={particle2} alt="img" />
      <img className="section__particle three" src={particle3} alt="img" />
      <img className="section__particle four" src={particle4} alt="img" />
      <Container>
        <Row Vcenter={true}>
          <Col xs={12} sm={7}>
            <div className="getapp-block">
              <h3>Get early access!</h3>
              <p>
                We are in beta phase and testing our application. We are opening our application to very few people right now. Be the first one in your locality to get access and roam carefree.
              </p>
              <div className="btn-block">
                {/*<Link href="#">*/}
                {/*  <a className="getapp-btn apl-btn">*/}
                {/*    <DiAppstore />*/}
                {/*    <p>*/}
                {/*      Download iphone App*/}
                {/*      <span>App Store</span>*/}
                {/*    </p>*/}
                {/*  </a>*/}
                {/*</Link>*/}

                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe9awuK5mEsuCDYRN5GfNDoNWFgnkLPm9dEMtRBC3azV9n9IA/viewform">
                  <a className="getapp-btn">
                    <FaGooglePlay />
                    <p>
                      Get it On
                      <span>Google Play Store</span>
                    </p>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={5}>
            <div className="getapp-thumb">
              <img src={"/1.png"} alt="get the app" />
            </div>
          </Col>
        </Row>
      </Container>
    </GetAppSectionWrap>
  );
};

export default GetApp;
