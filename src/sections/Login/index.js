import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Container, Row, Col } from "reusecore/Layout";

import { Title, Button, Box, Text, Input, Checkbox } from "reusecore/Core";

import { device } from "reusecore/utils";

import PageWrapper from "reusecore/PageWrapper";
import Logo from "reusecore/Logo";
import {BACKEND_URL} from "../../Constant";
import {router} from "next/client";

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

const Login = ({ admin, setToken, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginF = async (e) => {
    e.preventDefault();

    const res = await fetch(BACKEND_URL+"/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      }),
    });
    console.log(res);

    const data = await res.json();

    if (res.status === 200) {
      alert(data.status);
      setToken(data.accesstoken)
      setUser(data.user)
      localStorage.setItem("token",data.accesstoken)
      localStorage.setItem("user",data.user)
      // window.open("/blog-grid", "_self");
      await router.push("/blog-grid")
    } else {
      alert(data.error);
    }
  };

  return (
    <>
      <PageWrapper>
        <BoxStyled bg="#f7f8fa">
          <BoxInner className="d-flex align-items-center">
            <Container className="text-center">
              <Box my="100px" mx="auto">
                <Row className="justify-content-center">
                  <Col lg="7" xl="6">
                    <FormStyled method="POST">
                      <div className="mb-7">
                        <Title className="mb-2">Sign In</Title>
                      </div>
                      <Box mb={3}>
                        <Input
                          type="email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          placeholder="Email"
                        />
                      </Box>
                      <Box mb={4} className="position-relative">
                        <Input
                          type="password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          placeholder="Password"
                          css={`
                            padding-right: 9.25rem;
                          `}
                        />
                      </Box>
                      <Box mb={3} className="text-left">
                        <Checkbox>Keep me signed in</Checkbox>
                      </Box>
                      <Button
                        type="submit"
                        width="100%"
                        onClick={loginF}
                        borderRadius={10}
                      >
                        Login
                      </Button>
                      <Box mt={3}>
                        Don't have an account yet?{" "}
                        <Link href="/signup">
                          <a>Signup.</a>
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

export default Login;
