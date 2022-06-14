import React from "react";
import styled from "styled-components";
const About = () => {
  return (
    <Container>
      <Wrapper>
        <Founder>
          <ProfileImage>
            <img src="/assets/loveday.jpg" />
          </ProfileImage>
          <Text>
            <Title>Meet The Founder</Title>
            <Description>
              Mitia is founded by Mr. Lovday Izuwa, a lifetyle and business
              enthusiast. He has helped SMEs and corporate individuals improve
              their Net and & self worth
            </Description>

            <Bottom>
              <Name>Loveday Soj Izuwa</Name>
              <Read>Read More</Read>
            </Bottom>
          </Text>
        </Founder>

        <Agency>
          <Content></Content>
          <Button>Schedule a call</Button>
        </Agency>
      </Wrapper>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 100%;
  padding-top: 70px;
  //   background-color: var(--yellow);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  //   box-shadow: 0px 5px 2px #f2f2f2;
  position: relative;
`;
const Wrapper = styled.div`
  width: 90%;
  color: white;
  flex-wrap: wrap;
  height: 100%;

  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 5;
  @media screen and (max-width: 768px) {
    // padding: 50px 30px 20px;
  }
`;

const Founder = styled.div`
  background-color: white;
  color: black;
  display: flex;
  //   align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 800px;
  border-radius: 10px;
  box-shadow: 0px 10px 2px 10px #f2f2f2;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 350px;
    align-items: center;
  }

  @media screen and (max-width: 425px) {
    width: 300px;
  }
`;

const ProfileImage = styled.div`
  flex: 0.35;

  img {
    width: 100%;
  }

  @media screen and (max-width: 425px) {
    width: 280px;
  }
`;
const Text = styled.div`
  flex: 0.65;
  padding: 30px 30px 20px 20px;
  box-sizing: border-box;
  @media screen and (max-width: 425px) {
    flex: 1;
  }
`;
const Title = styled.div`
  font-size: 35px;
  color: var(--green);

  @media screen and (max-width: 425px) {
    font-size: 30px;
  }
`;
const Description = styled.div`
  line-height: 1.5em;
  font-size: 15px;
`;
const Bottom = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
  font-family: Monserrat;
  @media screen and (max-width: 425px) {
    font-size: 18px;
  }
`;
const Read = styled.div`
  font-size: 18px;
  color: var(--yellow);
  font-weight: 500;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(1.15);
  }

  @media screen and (max-width: 425px) {
  }
`;
const Agency = styled.div``;
const Content = styled.div``;
const Button = styled.div``;
// const Read = styled.div``;
// const Read = styled.div``;
