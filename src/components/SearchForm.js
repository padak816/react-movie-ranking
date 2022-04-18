import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { MultiSelect } from "react-multi-select-component";
import DatePicker from "react-datepicker";

const Filter = styled.div`
  display: flex;
  column-gap: 20px;
`;

const options = [
  { label: "국내 영화", value: "k" },
  { label: "해외 영화", value: "f" },
];

const SelectWrapper = styled.div`
  width: 200px;
`;

const SearchForm = () => {
  const [selected, setSelected] = useState([]);
  return (
    <Filter>
      <SelectWrapper>
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy={"Select"}
          disableSearch
          selectAllLabel={"전체선택"}
          overrideStrings={{
            selectSomeItems: "국내/해외",
            allItemsAreSelected: "전체선택",
          }}
        />
      </SelectWrapper>
      <div>
        <DatePicker />
      </div>
      <button>조회</button>
    </Filter>
  );
};

export default SearchForm;
