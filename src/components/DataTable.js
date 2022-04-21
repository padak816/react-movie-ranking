import React from "react";

const DataTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>순위</th>
          <th>영화</th>
        </tr>
      </thead>
      <tbody>
        {data.map((v, i) => (
          <tr key={i}>
            <td>{v.rank}</td>
            <td>{v.movieNm}</td>
          </tr>
        ))}
        <tr></tr>
      </tbody>
    </table>
  );
};

export default DataTable;
