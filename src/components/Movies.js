import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Title = styled.div`
  font-size: 30px;
`;

const Movies = () => {
  return (
    <Wrapper>
      <Title>🎬 박스오피스 랭킹</Title>
      <div>조회</div>
      <div>차트</div>
      <div>테이블</div>
    </Wrapper>
  );
};
export default Movies;
