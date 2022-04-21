import React, { useState } from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import moment from "moment";
import { useFetch } from "use-http";
import DataTable from "./DataTable";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Title = styled.div`
  font-size: 30px;
`;

const defaultParams = {
  key: "ba5f4a3506549d1f47ce426b72ced220",
  targetDt: moment().subtract(1, "day").format("YYYYMMDD"),
};

const Movies = () => {
  const [params, setParams] = useState(defaultParams);
  const { data } = useFetch(
    `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?${new URLSearchParams(
      params
    ).toString()}`,
    [params]
  );

  const search = (v) => {
    let obj = v;
    if (obj.repNationCd === "default") delete obj.repNationCd;
    setParams({ ...params, ...obj });
  };
  return (
    <Wrapper>
      <Title>🎬 박스오피스 랭킹</Title>
      <SearchForm search={search} />
      <div>차트</div>
      {data?.boxOfficeResult && (
        <DataTable data={data.boxOfficeResult.dailyBoxOfficeList} />
      )}
    </Wrapper>
  );
};
export default Movies;
