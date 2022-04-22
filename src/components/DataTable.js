import React from "react";

const DataCell = ({ item, column }) => {
  if (column.value) {
    return <span>{column.value(item)}</span>;
  }
};

const DataTable = ({ schema, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {schema.column.map((v, i) => (
            <th key={i}>{v.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((v, i) => (
          <tr key={i}>
            {schema.column.map((col, index) => (
              <td key={index}>
                <DataCell item={v} column={col} />
              </td>
            ))}
          </tr>
        ))}
        <tr></tr>
      </tbody>
    </table>
  );
};

export default DataTable;
