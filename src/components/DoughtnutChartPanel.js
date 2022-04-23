import React from "react";
import styled, { css } from "styled-components";
import { DoughnutChart } from "./DoughnutChart";
import { toThousandCommas } from "./common/format";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-size: 12px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  height: 100%;
`;

const GraphWrapper = styled.div`
  width: 30%;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 5px;
`;

const TableWrapper = styled.div`
  width: 50%;
  height: 100%;
  font-size: 15px;
  overflow-y: auto;
`;

const Table = styled.table`
  width: 100%;
`;

const Divider = styled.div`
  margin-bottom: 12px;
  width: 100%;
  border-bottom: 1px solid #dee2ec;
`;

const Td = styled.td`
  padding: 2px 10px 2px 20px;
  align-items: center;
  word-break: keep-all;
  text-align: right;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 5px;
  flex: 0 0 auto;
  ${({ color }) => css`
    background-color: ${color};
  `};
`;

const DoughtnutChartPanel = ({ data }) => {
  const backgroundColor = [
    "rgba(66, 124, 222, 1)",
    "rgba(172, 197, 243, 1)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgb(255 126 106)",
    "rgb(247 255 125)",
    "rgba(255, 159, 64, 0.2)",
    "rgba(212, 221, 234, 1)",
    "rgba(75, 192, 192, 0.2)",
  ];
  const chartData = data.map((d) => ({
    name: d.movieNm,
    percent: d.salesShare,
    value: toThousandCommas(d.audiCnt),
  }));

  return (
    <Wrapper>
      <Title>일일 관객수</Title>
      <Divider />
      <Content>
        <GraphWrapper>
          <DoughnutChart data={chartData} backgroundColor={backgroundColor} />
        </GraphWrapper>
        <TableWrapper>
          <Table>
            <tbody>
              {chartData.map((v, i) => {
                return (
                  <tr key={i}>
                    <Td>
                      <Div>
                        <Icon color={backgroundColor[i]} />
                        {v.name}
                      </Div>
                    </Td>
                    <Td>{`${v.percent}%`}</Td>
                    <Td>{`${v.value}`}</Td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </TableWrapper>
      </Content>
    </Wrapper>
  );
};

export default DoughtnutChartPanel;
