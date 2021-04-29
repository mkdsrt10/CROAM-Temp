import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Container, Row, Col } from "reusecore/Layout";
import { useHistory } from 'react-router-dom';

import {
  Title,
  Button,
  Box,
  Text,
  Input,
    Select,
  InputGroup,
  Checkbox,
} from "reusecore/Core";

import PageWrapper from "reusecore/PageWrapper";
import Logo from "reusecore/Logo";
import { device } from "reusecore/utils";
import { use } from "chai";
import {BACKEND_URL} from "../../Constant";

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

  const [user, setUser] = useState({
    name: "",
    email: "",
    gender:"",
    mobileNum: "",
    password: "",
    cpassword: "",
    location: "",
    age:"",
    pincode: "",
    emergencyName1: "",
    emergencyNum1: "",
    emergencyName2: "",
    emergencyNum2: "",
  });

  const handleInputs = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    await setUser({ ...user, [name]: value });
  };

  const handleInputSelect = async (value) => {
    await setUser({ ...user, gender: value });
  }

  const registerUser = async (e) => {
    // console.log("Clicked");
    e.preventDefault();

    const {
      name,
      email,
        gender, age,
      mobileNum,
      password,
      cpassword,
      location,
      pincode,
      emergencyName1,
      emergencyNum1,
      emergencyName2,
      emergencyNum2,
    } = user;

    const res = await fetch(BACKEND_URL+"/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        "number":mobileNum,
        gender:gender.value,
        age,
        password,
        cpassword,
        // location,
        pincode,
        emcName1:emergencyName1,
        emcPhone1:emergencyNum1,
        emcName2:emergencyName2,
        emcPhone2:emergencyNum2,
      }),
    });

    const data = await res.json();
    if(data.status === 201) {
      alert(data.message);
      window.open("/login", "_self");
    }
    else {
      alert(data.error);
    }
  };

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Others' },
  ];

  return (
    <>
      <PageWrapper>
        <BoxStyled bg="#f7f8fa">
          <BoxInner>
            <Container className="text-center">
              <Box my="150px" mx="auto">
                <Row className="justify-content-center">
                  <Col lg="7" xl="6">
                    <FormStyled method="POST">
                      <div className="mb-5">
                        <Title className="mb-2">Sign Up</Title>
                      </div>
                      <Box mb={3}>
                        <Input
                          type="name"
                          placeholder="Name"
                          name="name"
                          value={user.name}
                          onChange={handleInputs}
                        />
                      </Box>
                      <Box mb={3}>
                        <Input
                          onChange={handleInputs}
                          type="email"
                          placeholder="E-mail"
                          name="email"
                          value={user.email}
                        />
                      </Box>
                      <Box mb={3}>
                        <Input
                          onChange={handleInputs}
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={user.password}
                        />
                      </Box>
                      <Box mb={3}>
                        <Input
                          onChange={handleInputs}
                          type="password"
                          placeholder="Confirm password"
                          name="cpassword"
                          value={user.cpassword}
                        />
                      </Box>
                      <Box mb={3}>
                        <Input
                          onChange={handleInputs}
                          type="tel"
                          placeholder="Mobile number"
                          name="mobileNum"
                          value={user.mobileNum}
                        />
                      </Box>
                      <Box mb={3}>
                        <Select
                            onChange={handleInputSelect}
                            options={genderOptions}
                            placeholder={"Gender"}
                            name="gender"
                            value={user.gender}
                        />
                      </Box>
                      <Box mb={3}>
                        <Input
                            onChange={handleInputs}
                            type="text"
                            placeholder="Age"
                            name="age"
                            value={user.age}
                        />
                      </Box>
                      <Box mb={3}>
                        <Input
                          onChange={handleInputs}
                          type="text"
                          placeholder="Location"
                          name="location"
                          value={user.location}
                        />
                      </Box>
                      <Box mb={4}>
                        <Input
                          onChange={handleInputs}
                          type="number"
                          placeholder="PIN code"
                          name="pincode"
                          value={user.pincode}
                        />
                      </Box>
                      <label>Emergency Contact Information: </label>
                      <Box mt={3} mb={3}>
                        <Input
                          onChange={handleInputs}
                          type="name"
                          placeholder="Name 1"
                          name="emergencyName1"
                          value={user.emergencyName1}
                        ></Input>
                      </Box>
                      <Box mb={3}>
                        <Input
                          onChange={handleInputs}
                          type="tel"
                          placeholder="Phone no. 1"
                          name="emergencyNum1"
                          value={user.emergencyNum1}
                        ></Input>
                      </Box>
                      <Box mb={3}>
                        <Input
                          onChange={handleInputs}
                          type="name"
                          placeholder="Name 2"
                          name="emergencyName2"
                          value={user.emergencyName2}
                        ></Input>
                      </Box>
                      <Box mb={3}>
                        <Input
                          onChange={handleInputs}
                          type="tel"
                          placeholder="Phone no. 2"
                          name="emergencyNum2"
                          value={user.emergencyNum2}
                        ></Input>
                      </Box>
                      <Box mb={3} className="text-left">
                        <Checkbox>
                          I agree to the{" "}
                          <Link href="/">
                            <AForgot>Terms & Condition</AForgot>
                          </Link>
                        </Checkbox>
                      </Box>
                      <Link href="/blog-grid">
                        <Button
                          width="100%"
                          type="submit"
                          borderRadius={10}
                          onClick={registerUser}
                        >
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
