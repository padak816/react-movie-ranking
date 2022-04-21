import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

const Filter = styled.div`
  display: flex;
  column-gap: 20px;
`;

const Select = styled.select`
  width: 100px;
  height: 30px;
`;

const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

const SearchForm = ({ search }) => {
  const [date, setDate] = useState(yesterday);
  const [type, setType] = useState("default");
  function onClickSearch() {
    search({ targetDt: moment(date).format("YYYYMMDD"), repNationCd: type });
  }
  return (
    <Filter>
      <Select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="default">국내/해외</option>
        <option value="K">국내</option>
        <option value="F">해외</option>
      </Select>
      <div>
        <DatePicker
          selected={date}
          onChange={setDate}
          locale={ko}
          dateFormat="yyyy.MM.dd"
          maxDate={yesterday}
          showPopperArrow={false}
        />
      </div>
      <button onClick={onClickSearch}>조회</button>
    </Filter>
  );
};

export default SearchForm;
