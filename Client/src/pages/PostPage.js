import React from "react";
import theme from "../styles/theme";
import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PostPage = (props) => {
  const [mdinfo, setMD] = useState("");
  const [title, setTitle] = useState("");
  return (
    <Container>
      <StyledInput
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="markarea">
        <div data-color-mode="dark">
          <StyledMDEditor
            height="100vh"
            width="100vw"
            value={mdinfo}
            onChange={setMD}
          />
          <BottomContainer>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ArrowBackIcon
                sx={{
                  fontSize: "20px",
                  color: "white",
                  paddingTop: "5px",
                  paddingRight: "10px",
                  paddingLeft: "15px",
                }}
              />
              <h3 style={{ paddingTop: "5px" }}>나가기</h3>
              <Spacer />
              <SubSaveButton>임시저장</SubSaveButton>
              <SaveButton>출간하기</SaveButton>
            </div>
          </BottomContainer>
        </div>
      </div>
    </Container>
  );
};

export default PostPage;

const Container = styled.div`
  flex-direction: column;
  /* overflow-x: hidden; // 가로 스크롤 방지 */
  overflow-y: hidden;
  align-items: center;
  background-color: ${theme.colors.background};
  box-sizing: border-box;
  max-width: calc(100vw + 40px); // 뷰포트 너비 설정
  max-height: 100vh; 
`;

const StyledMDEditor = styled(MDEditor)`
  border: 1px solid transparent;
  border-radius: 0px;
  background-color: ${theme.colors.background};
  max-width: 100%;
  max-height: calc(100vh - 180px);
  overflow-y: auto;
  overflow-x: hidden;
`;

const BottomContainer = styled.div`
  position: absolute; // 또는 fixed, 상황에 따라 선택
  flex-direction: row;
  width: 50%;
  height: 70px;
  background-color: #333;
  z-index: 10;
  overflow-x: hidden;
  margin-left: -40px;
  color: ${theme.colors.white1};
`;

const StyledInput = styled.input`
  padding: 10px;
  margin: 10px;
  border: 0px solid transparent;
  border-radius: 0px;
  background-color: ${theme.colors.background};
  height: 66px;
  font-size: 45px;
  font-weight: 700;
  max-width: 50%;
  overflow-x: hidden;
  color: ${theme.colors.unSelected};

  &:focus {
    border: 0px solid transparent;
    outline: none;
    color: ${theme.colors.white};
  }
`;

const SubSaveButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  color: ${theme.colors.primary};
  font-weight: 600;
  font-size: 18px;
  transition: background-color 0.3s;
  padding: 8px 20px;
  margin-top: 5px;
  margin-right: 16px;
  &:hover {
    background-color: ${theme.colors.background};
  }
`;

const SaveButton = styled.button`
  background-color: ${theme.colors.primary2};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  color: ${theme.colors.background};
  font-weight: 600;
  font-size: 18px;
  transition: background-color 0.3s;
  padding: 8px 20px;
  margin-top: 5px;
  margin-right: 16px;
  left: 25px;
  &:hover {
    background-color: ${theme.colors.primary};
  }
`;

const Spacer = () => <div style={{ flexGrow: 1 }} />;
