import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import Button from "reusecore/Button";
import SectionTitle from "reusecore/SectionTitle";

import AppScreenSctionTwoWrapper from "./appScreenTwoSection.style";

const AppScreensTwo = () => {
  return (
    <AppScreenSctionTwoWrapper>
      <Container>
        <Row>
          <Col className="app-screen-content-block" offsetMd={6} md={6}>
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              {" "}
              <h4>App Screens</h4>
              <h2>
                <span>See screenshot</span> & engage in this app.
              </h2>
            </SectionTitle>
            <div className="btn-group">
              <Button className="btn-outline one">View on Google Play</Button>
              <Button className="btn-outline two">View on App Store</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </AppScreenSctionTwoWrapper>
  );
};

export default AppScreensTwo;
