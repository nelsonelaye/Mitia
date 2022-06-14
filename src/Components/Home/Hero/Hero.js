import React from "react";
import styled from "styled-components";
import { SiMarketo } from "react-icons/si";
const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Text>
          <h1>Your #1 Digital Marketing Agency</h1>
          <h5>The Fastest Growing B2B Agency Trusted by Brands of All Sizes</h5>
        </Text>

        <SideIcon />
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  padding-top: 70px;
  background-color: var(--yellow);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: calc(100vh - 70px);
  position: relative;
`;
const Wrapper = styled.div`
  width: 90%;
  color: white;
  flex-wrap: wrap;
  height: 100%;
  padding: 30px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    padding: 50px 30px 20px;
  }
`;

const Text = styled.div`
  width: 600px;
  h1 {
    font-size: 68px;
    font-weight: 500;

    color: white;
  }
  h5 {
    font-size: 28px;
    font-weight: 400;
    color: black;
  }

  @media screen and (max-width: 768px) {
    width: 425px;
    text-align: center;

    h1 {
      font-size: 50px;
    }

    h5 {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 425px) {
    width: 100%;

    h1 {
      font-size: 35px;
    }

    h5 {
      font-size: 18px;
    }
  }
`;

const SideIcon = styled(SiMarketo)`
  font-size: 300px;
  color: var(--green);

  @media screen and (max-width: 425px) {
    font-size: 200px;
  }
`;
