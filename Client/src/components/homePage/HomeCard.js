import styled from "styled-components";
import theme from "../../styles/theme";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from '../../config';

export default function HomeCard({ data }) {
  const navigate = useNavigate();

  const goToDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

  const [responseData, setData] = useState([]); // 데이터를 저장할 상태

  useEffect(() => {
    // 서버에서 데이터를 가져오는 비동기 요청
    axios
      .get(`${API_BASE_URL}/get`)
      .then((response) => {
        // 가져온 데이터를 상태(State)에 저장
        setData(response.data);
      })
      .catch((error) => {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      });
  }, []);

  return (
    <CardsContainer>
      {responseData.map((item, index) => (
        <HomeCardContainer key={index} onClick={() => goToDetailPage(item.id)}>
          {/* <ImageContainer>
            <img src={item.imageUrl} alt={item.title} />
          </ImageContainer> */}
          <ContentContainer>
            <TitleStyle size="16px">{item.title}</TitleStyle>
            <ContentStyle>{item.content}</ContentStyle>
            <DateStyle>
              {item.updatedAt} · {item.viewCount}개의 댓글
            </DateStyle>
          </ContentContainer>
          <BottomContainer>
            <p>by {item.author}</p>
            <Spacer />
            <FavoriteIcon
              sx={{
                fontSize: "12px",
                color: "white",
                paddingTop: "13px",
                paddingRight: "10px",
              }}
            />
            <p>{item.viewCount}</p>
          </BottomContainer>
        </HomeCardContainer>
      ))}
    </CardsContainer>
  );
}

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: flex-start;
  align-items: flex-start;

  > div {
    transition: transform 0.5s;
    &:hover {
      transform: translateY(-13px);
    }
  }
`;

const HomeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 319.96px;
  height: 376.99px;
  background-color: ${theme.colors.secondBlack};
  margin-top: 30px;
  border-radius: 5px;
  color: white;
  justify-content: start;
  flex: 0 0 319.96px; /* flex-grow, flex-shrink를 0으로, flex-basis를 340px로 설정 */
`;

const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 166.99px;
  }
`;

const ContentContainer = styled.div`
  width: 287.95px;
  padding: 16px;
`;

const TitleStyle = styled.div`
  width: 287.95px;
  max-width: 287.95px;
  font-size: ${(props) => props.size || "16px"};
  font-weight: ${(props) => props.weight || "700"};
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
`;

const ContentStyle = styled.div`
  width: 287.95px;
  height: 63px;
  margin-bottom: 24px;
  font-size: ${(props) => props.size || "14px"};
  font-weight: ${(props) => props.weight || "500"};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

const DateStyle = styled.div`
  width: 287.95px;
  font-size: ${(props) => props.size || "12px"};
  font-weight: ${(props) => props.weight || "500"};
`;

const BottomContainer = styled.div`
  width: 287.95px;
  display: flex;
  flex-direction: row;
  padding: 5px 16px;
  font-size: 12px;
  border-top: 1px solid ${theme.colors.divider};
`;

const Spacer = () => <div style={{ flexGrow: 1 }} />;
