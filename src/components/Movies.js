import React, { useState, useMemo } from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import moment from "moment";
import { useFetch } from "use-http";
import { toThousandCommas } from "./common/format";
import DataTable from "./DataTable";
import DoughtnutChartPanel from "./DoughtnutChartPanel";
import TypeIt from "typeit-react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 1000px;
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
  const { data, loading } = useFetch(
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

  const schema = useMemo(
    () => ({
      column: [
        {
          id: "rank",
          name: "순위",
          value: (item) => item.rank,
        },
        {
          id: "movieNm",
          name: "영화",
          value: (item) => item.movieNm,
        },
        {
          id: "openDt",
          name: "개봉일",
          value: (item) => item.openDt,
        },
        {
          id: "audiCnt",
          name: "일일 관객수",
          value: (item) => toThousandCommas(item.audiCnt),
        },
        {
          id: "audiAcc",
          name: "누적 관객수",
          value: (item) => toThousandCommas(item.audiAcc),
        },
      ],
    }),
    []
  );

  return (
    <Wrapper>
      <Title>
        <TypeIt
          getBeforeInit={(instance) => {
            instance
              .type("🎬 박스오피스 순ㅇㅜㅣ")
              .pause(750)
              .delete(1)
              .pause(300)
              .delete(1)
              .pause(300)
              .delete(1)
              .type("위 🎬");

            return instance;
          }}
        />
      </Title>
      <SearchForm search={search} />
      {data?.boxOfficeResult && (
        <DoughtnutChartPanel data={data.boxOfficeResult.dailyBoxOfficeList} />
      )}
      {data?.boxOfficeResult && (
        <DataTable
          schema={schema}
          data={data.boxOfficeResult.dailyBoxOfficeList}
          loading={loading}
        />
      )}
    </Wrapper>
  );
};
export default Movies;
