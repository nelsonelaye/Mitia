import React from "react";
import styled from "styled-components";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src="/assets/logo2.png" />
        </Logo>
        <Navigations>
          <Nav>Our Agency</Nav>
          <Nav>Services</Nav>
          <Nav>Our Work</Nav>
          <Nav>Blog</Nav>
          <Nav>Contact</Nav>
        </Navigations>
        <Button>Schedule a Call</Button>

        <MenuIcon />
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  justify-content: center;
  //   border-bottom: 1px solid rgb(230, 230, 250);
  z-index: 15;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 90%;
  padding: 5px 0;
  max-width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  //   background: green;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 5px 20px;
  }
`;

const Logo = styled.div`
  width: 80px;
  img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 50px;
  }
`;
const Navigations = styled.div`
  display: flex;
  align-items: center;
  //   background: red;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Nav = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin: 0 20px;
  letter-spacing: 0.125em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 350ms;

  :hover {
    color: var(--green);
  }

  @media screen and (max-width: 1024px) {
    margin: 0 15px;
  }
`;
const Button = styled.div`
  padding: 18px 30px;
  background-color: var(--green);
  border-radius: 5px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  transition: all 350ms;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  :hover {
    color: black;
    background-color: white;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled(CgMenuRight)`
  font-size: 30px;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
// const Logo= styled.div``
