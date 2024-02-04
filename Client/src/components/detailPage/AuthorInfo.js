import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import theme from "../../styles/theme";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AuthorInfo() {
  const { id } = useParams();
  const [detailData, setData] = useState([]); // 데이터를 저장할 상태
  
  useEffect(() => {
    // 서버에서 데이터를 가져오는 비동기 요청
    axios
      .get(`http://localhost:8080/api/articles/get/${id}`)
      .then((response) => {
        // 가져온 데이터를 상태(State)에 저장
        setData(response.data);
      })
      .catch((error) => {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      });
  }, []);

  return (
    <MyInfo height="27%">
      <AccountCircleIcon
        sx={{
          fontSize: "130px",
          color: "white",
          paddingTop: "5px",
          paddingRight: "15px",
          paddingBottom: "20px",
        }}
      />
      <ProfileInfoTextStyle size="26px" weight="700">
        {detailData.author}
      </ProfileInfoTextStyle>
    </MyInfo>
  );
}

const MyInfo = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 250px;
  height: ${(props) => props.height ?? "25%"};
  justify-content: ${(props) => props.content ?? "start"};
  border-bottom: ${(props) => props.weight ?? "1px"} solid
    ${theme.colors.divider};
`;

const ProfileInfoTextStyle = styled.div`
  color: ${theme.colors.white};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin-top: 50px;
`;