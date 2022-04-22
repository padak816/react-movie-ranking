import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

const Table = styled.table`
  background: #fff;
  text-align: center;
  border-collapse: collapse;
  color: #2d2d2d;
  thead {
    border: 1px solid #dee2ec;
  }
  width: 900px;
  height: 550px;
`;

const Th = styled.th`
  font-weight: 700;
  padding: 8px;
  border: none;
`;

const Tbody = styled.tbody`
  tr:last-child {
    border-bottom: 1px solid #dee2ec;
  }
  td {
    padding: 6 px;
    border: 1px solid #dee2ec;
  }
`;

const PlaceHolder = styled.tr`
  height: 42px;
  background: #f9fbff;
  color: #a1b1ca;
  font-size: 11px;
  text-align: center;

  font-size: 14px;
  font-weight: 700;
  background-color: #fff;
  color: #9cb2cd;
  border: 1px solid;
  border-color: #dee2ec;

  &&& td {
    padding: 60px 0;
  }
`;

export const LoadingIcon = withStyles({
  root: {
    color: "#2C62F6",
  },
})(CircularProgress);

const Cell = ({ item, column }) => {
  if (column.value) {
    return <span>{column.value(item)}</span>;
  }
};

const DataTable = ({ schema, data, loading }) => {
  return (
    <Table>
      <thead>
        <tr>
          {schema.column.map((v, i) => (
            <Th key={i}>{v.name}</Th>
          ))}
        </tr>
      </thead>
      <Tbody>
        {loading && (
          <PlaceHolder>
            <td colSpan="100%">
              <LoadingIcon size={20} />
            </td>
          </PlaceHolder>
        )}
        {!loading &&
          data.map((v, i) => (
            <tr key={i}>
              {schema.column.map((col, index) => (
                <td key={index}>
                  <Cell item={v} column={col} />
                </td>
              ))}
            </tr>
          ))}
        <tr></tr>
      </Tbody>
    </Table>
  );
};

export default DataTable;
