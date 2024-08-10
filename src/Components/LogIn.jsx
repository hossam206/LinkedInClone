import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { SignnIn } from "../redux/Functions/main_Functions";
import { useNavigate } from "react-router";

function LogIn() {
  const dispatch = useDispatch();
  const handleGoogleSignIn = () => {
    dispatch(SignnIn());
  };
  const AppState = useSelector((state) => state.userState);
  const navigate = useNavigate();

  useEffect(() => {
    if (AppState.user != null) {
      navigate("/home"); // or whatever route you want to navigate to after successful login
    }
  }, [AppState, navigate]);
  return (
    <Container>
      <Nav>
        <a href="/index.html">
          <img src="/Images/login-logo.svg"></img>
        </a>
        <div>
          <SignIn onClick={handleGoogleSignIn}>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professionl community</h1>
          <img src="/Images/login-hero.svg"></img>
        </Hero>
        <Form>
          <Google onClick={handleGoogleSignIn}>
            <img src="/Images/google.svg"></img>
            Sign In With Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
}
const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
  max-width: 1128px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 8px 10px;
  & > a {
    width: 135px;
    height: 34px;
  }
  @media (max-width: 768px) {
    padding: 8px 2px;
  }
`;
const Join = styled.a`
  border: 1px solid #cbc0be;
  border-radius: 20px;
  padding: 4px 14px;
  cursor: pointer;
  color: #242424;
  margin-right: 14px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    border-color:rgba(0, 0, 0, 0.08);
    color:rgba(0,0,0,0.9)
    text-decoration:none;
    transition:all .2s ease-in-out;
    }
    @media (max-width: 768px)
  {
        margin-right: 6px;
    padding: 4px 9px;

  }
`;
const SignIn = styled.a`
  border: 1px solid #0a66c2;
  border-radius: 20px;
  padding: 7px 16px;
  cursor: pointer;
  color: #0a66c2;
  &:hover {
    background-color: #0a66c2;
    border-color: #0a66c2;
    color: #fff;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 768px) {
    padding: 4px 9px;
  }
`;
const Section = styled.section`
  padding-top: 30px;
  display: flex;
  position: relative;
  align-content: start;
  min-height: 700px;
  width: 100%;
  max-width: 1128px;
  margin: auto;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;
const Hero = styled.section`
  justify-content: space-between;
  position: relative;
  width: 100%;
  h1 {
    width: 55%;
    line-height: 70px;
    font-weight: 200;
    color: #2977c9;
    font-size: 56px;
    padding-bottom: 0;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 22px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    width: 700px;
    height: 600px;
    position: absolute;
    right: -131px;
    top: 30px;
    @media (max-width: 768px) {
      position: initial;
      width: initial;
      height: initial;
      top: 220px;
    }
  }
`;
const Form = styled.div`
  margin-top: 100px;
  width: 400px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
const Google = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #b7b7b7;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
  }
`;
export default LogIn;
