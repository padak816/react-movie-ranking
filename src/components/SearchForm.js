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

const SearchForm = () => {
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState(null);
  return (
    <Filter>
      <Select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">국내/해외</option>
        <option value="K">국내</option>
        <option value="F">해외</option>
      </Select>
      <div>
        <DatePicker
          selected={date}
          onChange={setDate}
          locale={ko}
          dateFormat="yyyy.MM.dd"
          showPopperArrow={false}
        />
      </div>
      <button>조회</button>
    </Filter>
  );
};

export default SearchForm;
