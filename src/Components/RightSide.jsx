import React from "react";
import styled from "styled-components";
const RightSide = () => {
  return (
    <Container>
      <Feed>
        <Title>
          <h5>Add to your feed</h5>
          <img src="/Images/feed-icon.svg" alt="feed-icon" loading="lazy" />
        </Title>
        <ContentList>
          <li>
            <a>
              <img src="/Images/Avatar.jpg" alt="Avatar" />
            </a>
            <div>
              <span># Video</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <img src="/Images/Avatar.jpg" alt="Avatar" />
            </a>
            <div>
              <span># Video</span>
              <button>Follow</button>
            </div>
          </li>
        </ContentList>
        <Recomendition>
          <a>view all recommendations</a>

          <img src="/Images/right-icon.svg" alt="feed-icon" loading="lazy" />
        </Recomendition>
      </Feed>
      <Banner>
        <img src="/Images/banner-image.jpg" alt="feed-icon" loading="lazy" />
      </Banner>
    </Container>
  );
};
const Container = styled.div`
  grid-area: rightside;
`;
const Feed = styled.div`
  background-color: #fff;
  padding: 10px 15px;
  border: 1px solid rgb(0 0 0 / 22%);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 0px;
  h5 {
    font-size: 15px;
    color: rgb(0, 0, 0, 0.6);
  }
`;
const ContentList = styled.ul`
  list-style: none;
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 12px 0;
    font-size: 14px;
    a {
      display: inline-block;
      width: 36px;
      height: 36px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    & > div {
      display: flex;
      flex-direction: column;

      button {
        background: transparent;
        border-radius: 15px;
        padding: 2px 8px;
        cursor: pointer;
        outline: none;
        color: rgba(0, 0, 0, 0.6);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        max-height: 32px;
        text-align: center;
        max-width: 480px;

        &:hover {
          color: #fff;
          background-color: #000;
        }
      }
    }
  }
`;
const Avatar = styled.div``;
const Recomendition = styled.div`
  a {
    color: #0a66c2;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
`;
const Banner = styled(Feed)`
  img {
    width: 100%;
    height: 100%;
  }
`;
export default RightSide;
