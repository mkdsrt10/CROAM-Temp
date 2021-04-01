import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Container, Row, Col } from "reusecore/Layout";

import { Title, Button, Box, Text, Input, Checkbox } from "reusecore/Core";

import { device } from "reusecore/utils";

import PageWrapper from "reusecore/PageWrapper";
import Logo from "reusecore/Logo";

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
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  color: ${({ theme }) => theme.colors.secondary} !important;
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  text-decoration: none !important;
`;

const Login = () => {
  return (
    <>
        <PageWrapper>
            <BoxStyled bg="#f7f8fa">
            
            <BoxInner className="d-flex align-items-center">
                <Container className="text-center">
                <Box my="100px" mx="auto">
                    <Row className="justify-content-center">
                    <Col lg="7" xl="6">
                        <FormStyled>
                        <div className="mb-7">
                            <Title className="mb-2">Sign In</Title>
                            <Text>Enter your account details below</Text>
                        </div>
                        <Box mt={3} mb={3}>
                            <Input type="email" placeholder="Username" />
                        </Box>
                        <Box mb={4} className="position-relative">
                            <Input
                            type="password"
                            placeholder="Password"
                            css={`
                                padding-right: 9.25rem;
                            `}
                            />
                        </Box>
                        <Box mb={3} className="text-left">
                            <Checkbox>Keep me signed in</Checkbox>
                        </Box>
                        <Link href = "/blog-grid">
                        <Button width="100%" type="submit" borderRadius={10}>
                            Login
                        </Button>
                        </Link>
                        <Box mt={3}>
                          Don't have an account yet? <Link href = "/signup"><a>Signup.</a></Link>
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

export default Login;
