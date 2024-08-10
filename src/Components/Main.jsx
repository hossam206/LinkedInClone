import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PublishPost from "./PublishPost";
import { ShowAllPosts } from "../redux/Functions/main_Functions";
import ReactPlayer from "react-player";
const Main = () => {
  const AppState = useSelector((state) => state.userState);

  const dispatch = useDispatch();
  const articleState = useSelector((state) => state.ArticleState.articles);
  const loadingeState = useSelector((state) => state.ArticleState.loading);
  const ProgressWidth = useSelector((state) => state.progressState.progress);

  const [PublishPoststate, showPublishPost] = useState(false);
  const handleClick = () => {
    showPublishPost(!PublishPoststate);
  };
  useEffect(() => {
    dispatch(ShowAllPosts());
  }, []);

  return (
    <>
      <Container>
        <PosTarea>
          <StartPost>
            <UserImg>
              {AppState.user && AppState.user.photoURL ? (
                <img src={AppState.user.photoURL} />
              ) : (
                <img src="Images/user.svg" alt="search-icon"></img>
              )}
            </UserImg>
            <PostInput>
              <button onClick={handleClick}>Start A Post</button>
            </PostInput>
          </StartPost>

          <Div>
            <button>
              <img src="Images/photo-icon.svg" alt="search-icon"></img>
              <span>photo</span>
            </button>
            <button>
              <img src="Images/photo-icon.svg" alt="search-icon"></img>
              <span>video</span>
            </button>
            <button>
              <img src="Images/event-icon.svg" alt="search-icon"></img>
              <span>event</span>
            </button>
            <button>
              <img src="Images/photo-icon.svg" alt="search-icon"></img>
              <span>write article</span>
            </button>
          </Div>
        </PosTarea>

        {loadingeState && (
          <PostProgress>
            <span style={{ width: ProgressWidth + "%" }}></span>
            <small>{ProgressWidth}%</small>
          </PostProgress>
        )}

        <PublishPost
          PublishPoststate={PublishPoststate}
          handleClick={handleClick}
        />
        <PostsContent>
          {articleState.length == 0 ? (
            <p
              style={{
                textAlign: "center",
                padding: "20px 0px",
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              There is No posts
            </p>
          ) : (
            <Posts>
              {articleState.length > 0 &&
                articleState.map((article, index) => (
                  <Article key={index}>
                    {AppState.user ? (
                      <ArticleContent>
                        <ArticleHead>
                          <ArticleUser>
                            <ArticleHeadImg>
                              {AppState.user.photoURL ? (
                                <img src={AppState.user.photoURL}></img>
                              ) : (
                                <img
                                  src="Images/user.svg"
                                  alt="search-icon"
                                ></img>
                              )}
                            </ArticleHeadImg>
                            <ArticleUserInfo>
                              <h5>
                                {AppState.user.displayName
                                  ? AppState.user.displayName
                                  : "user"}
                              </h5>
                              <p>{AppState.user.email}</p>
                              <span>
                                {article.actor.date
                                  .toDate()
                                  .toLocaleDateString()}
                              </span>
                            </ArticleUserInfo>
                          </ArticleUser>
                        </ArticleHead>

                        <ArticleBody>
                          <PostDescription>
                            <p>{article.description}</p>
                          </PostDescription>
                          <PostImage>
                            {!article.shareImg && article.video ? (
                              <ReactPlayer
                                width={"100% "}
                                url={article.video}
                              />
                            ) : (
                              article.shareImg && (
                                <img src={article.shareImg}></img>
                              )
                            )}
                          </PostImage>
                          <LikesNumber>
                            <img src="/Images/like.svg"></img>
                            <img src="/Images/heart.svg"></img>
                            <p>57 Likes 1 share</p>
                          </LikesNumber>
                          <BottomBox>
                            <li>
                              <img src="/Images/like-icon.svg"></img>
                              <span>Like</span>
                            </li>
                            <li>
                              <img src="/Images/comment-icon.svg"></img>
                              <span>Comment</span>
                            </li>
                            <li>
                              <img src="/Images/share-icon.svg"></img>
                              <span>share</span>
                            </li>
                            <li>
                              <img src="/Images/send-icon.svg"></img>
                              <span>send</span>
                            </li>
                          </BottomBox>
                        </ArticleBody>
                      </ArticleContent>
                    ) : (
                      <p>there is no user</p>
                    )}
                  </Article>
                ))}
            </Posts>
          )}
        </PostsContent>
      </Container>
    </>
  );
};
const Container = styled.div`
  width: 100%;
  border-radius: 6px;
  grid-area: main;
`;
const PosTarea = styled.div`
  background-color: #fff;
  padding: 20px 9px 4px 9px;
  border-radius: 5px;
  border: 1px solid rgb(0 0 0 / 22%);
  margin-bottom: 10px;
`;
const StartPost = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
const PostProgress = styled.div`
  width: 100%;
  padding: 7px 9px;
  background-color: #e4e5f2;
  border-radius: 16px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  justify-content: space-between;
  margin-bottom: 7px;

  span {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #0b4dd2;
    height: 100%;
  }
  small {
    position: absolute;
    top: 0px;
    height: 100%;
    right: 8px;
    z-index: 2;
    line-height: 16px;
    color: #ff3f3f;

    font-size: 11px;
  }
`;
const UserImg = styled.div`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;
const PostInput = styled.div`
  width: 96%;
  padding: 0px 6px;
  button {
    width: 100%;
    height: 30px;
    border-radius: 20px;
    border: none;
    outline: none;
    border: 1px solid rgb(0 0 0 / 22%);
    text-indent: 6px;
    font-weight: 400;
    background: transparent;
    text-align: left;
    color: #727272;
    font-size: 13px;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #fbfbfb;
    }
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 11px 10px 0px 10px;

  button {
    background: transparent;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
    padding: 2px 3px;
    span {
      color: #1982b8;
      margin-left: 4px;
    }
    &:hover {
      background-color: #dfdfdf;
    }
  }
`;

const PostsContent = styled.div``;
const Article = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 13px 9px 0px 9px;
  border: 1px solid rgb(0 0 0 / 22%);
  background-color: #fff;
  border-radius: 8px;
`;
const ArticleHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;
const ArticleUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ArticleHeadImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const ArticleUserInfo = styled.div`
  p {
    font-size: 14px;
    font-weight: 300;
    color: #939090;
  }
  span {
    font-size: 14px;
    font-weight: 300;
    color: #939090;
  }
`;

const ArticleContent = styled.div``;
const ArticleBody = styled.div`
  padding: 10px 10px 10px 10px;
`;
const PostDescription = styled.div`
  padding-bottom: 10px;
  text-transform: capitalize;

  p {
    line-height: 1.4;
    font-family: system-ui;
    font-weight: 500;
  }
`;
const PostImage = styled.div`
  height: 50%;
  img {
    width: 100%;
    height: 100%;
  }
`;
const BottomBox = styled.div`
  border-top: 1px solid rgb(0 0 0 / 22%);
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 11px;
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    padding: 8px 4px;
    border-radius: 4px;

    img {
      margin-right: 4px;
      @media (max-width: 768px) {
        width: 22px;
        height: 18px;
      }
    }

    &:hover {
      background-color: #dfdddd;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
const LikesNumber = styled.div`
  isplay: flex;
  font-size: 14px;
  padding: 10px 0px;
  img {
    width: 18px;
    height: 18px;
    margin-right: 4px;
  }
`;

const Posts = styled.div``;
export default Main;
