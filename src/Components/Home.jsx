import React from "react";
import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RightSide";
import styled from "styled-components";
const Home = () => {
  return (
    <Container>
      <Section>
        <h5>
          <a>hiring in a hurry ? -</a>
        </h5>
        <p>
          find talanted pros in record time with upwork and keep business
          moving.
        </p>
      </Section>
      <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 70px;
`;
const Section = styled.div`
  cursor: pointer;
  text-align: center;
  display: flex;
  width: 100%;
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-decoration: underline;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px 5px;
  }
`;
const Layout = styled.div`
  display: grid;

  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Home;
