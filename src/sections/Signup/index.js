import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Container, Row, Col } from "reusecore/Layout";

import { Title, Button, Box, Text, Input, InputGroup, Checkbox } from "reusecore/Core";

import PageWrapper from "reusecore/PageWrapper";
import Logo from "reusecore/Logo";
import { device } from "reusecore/utils";

const BoxStyled = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const BoxInner = styled(Box)`
  margin-top: -65px;
  min-height: 100vh;
`;

const FormStyled = styled.form`
  padding: 40px 30px;
  @media ${device.sm} {
    padding: 53px 58px 50px;
  }
  box-shadow: ${({ theme }) => `0 20px 61px ${theme.colors.shadow}`};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.light};
  width: 100%;
`;

const AForgot = styled.a`
  color: ${({ theme }) => theme.colors.secondary} !important;
  text-decoration: none !important;
`;

const SignUp = () => {
  return (
    <>
      <PageWrapper>
        <BoxStyled bg="#f7f8fa">
          <BoxInner>
            <Container className="text-center">
              <Box my="150px" mx="auto">
                <Row className="justify-content-center">
                  <Col lg="7" xl="6">
                    <FormStyled>
                      <div className="mb-5">
                        <Title className="mb-2">Sign Up</Title>
                        
                      </div>
                      <Box mb={3}>
                        <Input type="name" placeholder="Name" />
                      </Box>
                      <Box mb={3}>
                        <Input type="email" placeholder="E-mail" />
                      </Box>
                      <Box mb={3}>
                        <Input type="tel" placeholder="Mobile number" />
                      </Box>
                      <Box mb={3}>
                        <Input type="text" placeholder="Location" />
                      </Box>
                      <Box mb={4}>
                        <Input type="number" placeholder="PIN code" />
                      </Box>
                      <label for="EC Info">Emergency Contact Information: </label>
                      <Box mt={3} mb={3}>
                          <Input type = "name" placeholder="Name 1"></Input>
                      </Box>
                      <Box mb={3}>
                          <Input type = "tel" placeholder="Phone no. 1"></Input>
                      </Box>
                      <Box mb={3}>
                          <Input type = "text" placeholder="Relation 1"></Input>
                      </Box>
                      <Box mb={3}>
                          <Input type = "name" placeholder="Name 2"></Input>
                      </Box>
                      <Box mb={3}>
                          <Input type = "tel" placeholder="Phone no. 2"></Input>
                      </Box>
                      <Box mb={3}>
                          <Input type = "text" placeholder="Relation 2"></Input>
                      </Box>
                      <Box mb={3} className="text-left">
                        <Checkbox>
                          I agree to the{" "}
                          <Link href="/">
                            <AForgot>Terms & Condition</AForgot>
                          </Link>
                        </Checkbox>
                      </Box>
                    <Link href = "/blog-grid">
                      <Button width="100%" type="submit" borderRadius={10}>
                        Get Started
                      </Button>
                    </Link>
                      <Box mt={3}>
                        Already have an account?{" "}
                        <Link href="/login">
                          <a>Login.</a>
                        </Link>
                      </Box>
                    </FormStyled>
                  </Col>
                </Row>
              </Box>
            </Container>
          </BoxInner>
        </BoxStyled>
      </PageWrapper>
    </>
  );
};
export default SignUp;
