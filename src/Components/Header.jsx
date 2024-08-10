import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { SignOut } from "../redux/Functions/main_Functions";

const Header = () => {
  const AppState = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const handleGoogleSignOut = () => {
    dispatch(SignOut());
  };
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/Images/home-logo.svg" alt="home-logo"></img>
          </a>
        </Logo>
        <Search>
          <SearchIcon>
            <img src="Images/search-icon.svg" alt="search-icon"></img>
          </SearchIcon>
          <input tpe="text" placeholder="Search here" />
        </Search>
        <Nav>
          <NavListWrap>
            <NavList>
              <a className="active">
                <img src="Images/nav-home.svg" alt="search-icon"></img>
                <span>home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="Images/nav-network.svg" alt="search-icon"></img>
                <span>network</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="Images/nav-jobs.svg" alt="search-icon"></img>
                <span>jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="Images/nav-messaging.svg" alt="search-icon"></img>
                <span>messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="Images/nav-notifications.svg" alt="search-icon"></img>
                <span>notifications</span>
              </a>
            </NavList>
            <User>
              <a>
                {AppState.user && AppState.user.photoURL ? (
                  <img src={AppState.user.photoURL} />
                ) : (
                  <img src="Images/user.svg" alt="search-icon"></img>
                )}
                <span>
                  Me
                  <img src="Images/down-icon.svg" alt="search-icon"></img>
                </span>
              </a>
              <Signout>
                <a onClick={handleGoogleSignOut}>
                  <span>Sign Out</span>
                </a>
              </Signout>
            </User>
            <Small></Small>

            <Work>
              <a>
                <img src="Images/nav-work.svg" alt="search-icon"></img>
                <span>
                  work
                  <img src="Images/down-icon.svg" alt="search-icon"></img>
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #ededed;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  padding: 0 24px;
  @media (max-width: 767px) {
    padding: 15px;
  }
`;
const Content = styled.div`
  max-width: 1128px;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  align-items: center;
  padding: 5px 0px;
`;
const Logo = styled.span`
  margin-right: 10px;
  font-size: 0px;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 280px;
    position: absolute;
    width: 22px;
    z-index: 1;
    top: 8px;
    left: 2px;
    border-radius: 0 2px 2px 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    box-shadow: none;
    border: none;
    background-color: #eef3f8;
    width: 218px;
    height: 32px;
    padding: 2px 8px 0px 26px;
    color: #4c4c4c;
    border-radius: 5px;
    line-height: 1.7px;
    font-weight: 400;
    font-size: 14px;
    border-color: #dce6f1;
    vertical-align: text-top;
  }
`;
const SearchIcon = styled.div`
   {
  }
`;
const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    width: 100%;
  }
`;
const NavListWrap = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
 
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid;
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const NavList = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weigh: 400;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    span {
      text-transform: capitalize;
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      @media (max-width: 768px) {
 
        font-size: 10px;
      }
    }
    @media (max-width: 768px) {
      min-width: 58px;
      margin: 0;
      font-size: 10px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: #000;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Signout = styled.div`
  position: absolute;
  top: 100%;
  left: 0px;
  background-color: white;
  height: 30px;

  display: none;
  align-items: center;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 500;
  border-radius: 4px;
  padding: 2px 8px;
  @media (max-width: 678px) {
    top: 0;
    left: -13px;
  }

  &:hover {
    background-color: #444;
    color: #fff;
  }
`;
const User = styled(NavList)`
  cursor: pointer;
  position: relative;
  width: 60px;
  text-align: center;
  a {
    margin: 0;
    color: #3c3c3c;
    img {
      border-radius: 50%;
      width: 29px;
    }
    span {
      font-size: 14px;
      img {
        width: 12px;
      }
    }
  }
  &:hover {
    ${Signout} {
      display: flex;
      jusify-content: center;
      align-items: center;
    }
  }
`;

const Small = styled.small`
  width: 1px;
  background-color: #e3e3e3;
  margin: 0 10px;
  @media (max-width: 678px) {
    display: none;
  }
`;
const Work = styled(User)`
  @media (max-width: 768px) {
    display: none;
  }
`;
export default Header;
