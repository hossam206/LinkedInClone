import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { Timestamp } from "firebase/firestore";
import { PostArticles } from "../redux/Functions/main_Functions";

const PublishPost = ({ PublishPoststate, handleClick }) => {
  const dispatch = useDispatch();
  const AppState = useSelector((state) => state.userState);
  const [Userpost, setUserpost] = useState("");
  const [attachtype, setattachtype] = useState("");
  const [videolink, setvideolink] = useState("");
  const [imagesrc, setimagesrc] = useState("");

  const reset = (e) => {
    setUserpost("");
    setvideolink("");
    setimagesrc("");
    setattachtype("");
    handleClick(e);
  };
  const switchAttachType = (area) => {
    setattachtype(area);
  };
  const handlechange = (e) => {
    const image = e.target.files[0];
    if (image === "" || undefined) {
      alert(`Your Image is ${typeof image} please enter valid image`);
      return;
    } else {
      setimagesrc(image);
    }
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (e.target != e.currentTarget) {
      return;
    }
    const payload = {
      image: imagesrc,
      video: videolink,
      user: AppState.user,
      description: Userpost,
      time: Timestamp.now(),
    };
    dispatch(PostArticles(payload));
    reset(e);
  };
  return (
    <>
      {PublishPoststate && (
        <Container>
          <Content>
            <PostHead>
              <h5>Create a post</h5>

              <button onClick={(e) => reset(e)}>
                <img
                  src="Images/close-icon.svg"
                  alt="search-icon"
                  loading="lazy"
                ></img>
              </button>
            </PostHead>
            <PostBody>
              <UserInfo>
                {AppState && AppState.user.photoURL ? (
                  <img src={AppState.user.photoURL} />
                ) : (
                  <img src="Images/user.svg" alt="search-icon"></img>
                )}
                {AppState.user ? <h5> {AppState.user.displayName}</h5> : "User"}
              </UserInfo>
              <PostContent>
                <textarea
                  placeholder="What do you want to talk about"
                  autoFocus={true}
                  value={Userpost}
                  onChange={(e) => setUserpost(e.target.value)}
                ></textarea>
                {attachtype === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handlechange}
                    />

                    <label
                      htmlFor="file"
                      style={{
                        textAlign: "center",
                        display: "block",
                        fontWeight: "500",
                        cursor: "pointer",
                      }}
                    >
                      select an image to share
                    </label>
                    {imagesrc && (
                      <img
                        src={URL.createObjectURL(imagesrc)}
                        alt="imagesrc"
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    )}
                  </UploadImage>
                ) : (
                  attachtype === "media" && (
                    <>
                      <input
                        style={{
                          width: "95%",
                          height: "20px",
                          borderRadius: "3px",

                          outline: "none",
                          border: "1px solid #000",
                          marginBottom: "20px",
                          Color: "#444",
                          fontSize: "16px",
                        }}
                        tpye="text"
                        value={videolink}
                        name="video"
                        onChange={(e) => setvideolink(e.target.value)}
                        placeholder="Enter Video Link"
                      />
                      {videolink && (
                        <ReactPlayer width="100%" url={videolink} />
                      )}
                    </>
                  )
                )}
              </PostContent>
              <ShareCreation>
                <PostAttacment>
                  <AssetButton onClick={() => switchAttachType("image")}>
                    <img src="Images/share-image.svg" alt="share-image"></img>
                  </AssetButton>
                  <AssetButton onClick={() => switchAttachType("media")}>
                    <img src="Images/share-video.svg" alt="share-video"></img>
                  </AssetButton>
                  <Small></Small>
                  <AssetButton>
                    <Anyone>
                      <img
                        src="Images/share-comment.svg"
                        alt="share-comment"
                      ></img>
                      <p>Anyone</p>
                    </Anyone>
                  </AssetButton>
                </PostAttacment>
                <PostButton
                  disabled={!Userpost ? true : false}
                  onClick={(e) => handlePost(e)}
                >
                  post
                </PostButton>
              </ShareCreation>
            </PostBody>
          </Content>
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.3s;
  overflowy: scroll;
`;
const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: #fff;
  max-height: 99%;
  overflow: initial;

  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;
const PostHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 17px;
  border-bottom: 1px solid rgb(0 0 0 / 22%);
  h5 {
    font-size: 15x;
    font-weight: 400;
  }
  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    padding: 3px 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s all ease-in-out;
    &:hover {
      background-color: #e7e3e3;
    }
  }
`;
const PostBody = styled.div`
  padding: 15px 17px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
const PostContent = styled.div`
  margin: 10px 0px 20px 0px;
  width: 100%;
  height: 100%;
  textarea {
    resize: none;
    line-height: 1.5;
    border: none;
    width: 100%;
    outline: none;
    min-height: 100px;
    font-weight: 400px;
    font-size: 16px;
    text-transform: capitalize;
    overflow: hidden;
    padding: 4px;
  }
`;
const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

    align-items: center;
}
  `;
const PostAttacment = styled.div`
    display: flex;
    align-items: center;
}`;
const AssetButton = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  margin-right: 10px;
  border-radius: 50%;
  padding: 3px;
  transition: 0.3s all ease-in-out;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    background-color: #dbd1d1;
  }
`;

const Small = styled.div`
  border-left: 1px solid rgb(0 0 0 / 22%);
  height: 30px;
  width: 4px;
  margin-right: 10px;
`;
const Anyone = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #7c7a7ae6;
  img {
    margin-right: 5px;
  }
`;
const PostButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  border-radius: 14px;
  background-color: ${(props) =>
    props.disabled ? "rgb(235, 235, 235)" : "#0a66c2"};
  color: ${(props) => (props.disabled ? "rgb(0, 0, 0, 0.25)" : "white")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  padding: 4px 19px;
  &:hover {
    background: ${(props) => (props.disabled ? "" : "#004182")};
  }
`;

const UploadImage = styled.div``;
export default PublishPost;
