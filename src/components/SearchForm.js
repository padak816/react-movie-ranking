import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

const Filter = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
`;

const Select = styled.select`
  width: 120px;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  padding: 0px 3px;
`;

const Button = styled.button`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.5s;
  background: #0d6efd;
  color: #ffffff;
  :hover {
    background: #025ce2;
  }
  padding: 5px;
  width: 70px;
  height: 40px;
  font-size: 16px;
  border: 1px solid #ffffff;
  border-radius: 5px;
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
      <Button onClick={onClickSearch}>조회</Button>
    </Filter>
  );
};

export default SearchForm;
