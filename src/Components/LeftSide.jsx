import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const LeftSide = () => {
  const AppState = useSelector((state) => state.userState);

  return (
    <Container>
      <Upper>
        <ArtCard>
          <UserInfo>
            <CardBackground />
            <a>
              <Photo />
              <Link>
                welcome, {AppState.user ? AppState.user.displayName : "there"}
              </Link>
            </a>
            <a>
              <AddPhotoText>Add a Photo</AddPhotoText>
            </a>
          </UserInfo>
        </ArtCard>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow Your Network</span>
            </div>
            <img src="/Images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/Images/item-icon.svg" alt="" />
            My Items
          </span>
        </Item>
      </Upper>
      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/Images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a>
          <span>Follows Hashtags</span>
        </a>
        <a>
          <span>Discover More</span>
        </a>
      </CommunityCard>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  border-radius: 6px;
  grid-area: leftside;
`;
const Upper = styled.div`
  border: 1px solid rgb(0, 0, 0, 0.15);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
`;
const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 l 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const UserInfo = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.15);
  overflow: hidden;
`;
const CardBackground = styled.div`
  overflow: hidden;
  background: url("/Images/card-bg.svg");
  background-size: cover;

  height: 54px;
  margin: -12px -12px 0;
`;
const Photo = styled.div`
  background: url("/Images/photo.svg");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: #fff;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid #fff;
  margin: -28px auto 3px;
  border-radius: 50%;
`;
const Link = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: rgb(0, 0, 0, 0.9);
  line-height: 1.5;
`;
const AddPhotoText = styled.div`
  color: #0a66c2;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
  &:hover {
    text-decoration: underline;
  }
`;
const Widget = styled.div`
  padding: 15px 13px;
  background: #fff;
  border-bottom:1px solid rgb(0,0,0,0.15);
  font-weight:600;
  & > a {
    display: flex;
    align-items: center;
    justify: content:space-between;

    justify-content: space-between;
  
}
      &:hover
      {
      background-color:rgb(0,0,0,0.09);
      }
    div {
      display: flex;
      flex-direction: column;
    text-align:left;

    span{
    font-size: 14px;
    line-height: 1.333;
    font-weight: 600;
    &:first-child{
color:rgb(114 114 114 / 88%)
    }
    &:last-child{
    color:rgba(0,0,0,1);
    }
    }
    }
  
  }
`;
const Item = styled.div`
  padding: 15px 13px;
  background-color: #fff;

  border-radius: 0px 0px 4px 6px;
  font-weight: 600;

  &:hover {
    background-color: rgb(0, 0, 0, 0.09);
  }
`;
const CommunityCard = styled.div`
  padding: 15px 13px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  jusify-content: space-between;
  border: 1px solid rgb(0 0 0 / 22%);
  border-radius: 8px;
  overflow: hidden;
  font-weight: 600;
  margin-bottom: 30px;

  & > a {
    padding: 5px 0px;
    span {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      img {
        width: 18px;
      }
    }
    &:nth-child(2) {
      color: #0a66c2;
    }
    &:last-child {
      padding-top: 9px;
      border-top: 1px solid rgb(0, 0, 0, 0.15);
      color: rgb(114 114 114 / 88%);
    }
  }
  &:hover {
    background-color: rgb(0, 0, 0, 0.09);
  }

  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;
export default LeftSide;
