import { useState } from "react";
import styled from "styled-components";

export function SearchInput({ keyword }) {
  const [text, setText] = useState(keyword);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const searchKeyword = () => {
    if (text === "") return;
    window.location.href = `?q=${text}`;
  };

  return (
    <Header>
      <label htmlFor='searchKeyword'>
        <InputSearch
          name='searchKeyword'
          type='text'
          onChange={handleChange}
          placeholder='cat'
          value={text}
          onKeyUp={(e) => {
            if (e.code === "Enter") {
              searchKeyword();
            }
          }}
        />
      </label>
      <ButtonSearch onClick={searchKeyword}>검색</ButtonSearch>
    </Header>
  );
}

const Header = styled.header`
  position: sticky;
  top: 0;
  padding: 10px;
  z-index: 999;
  display: grid;
  grid-template-columns: 1fr 50px;
  gap: 5px;
`;

const InputSearch = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  padding: 10px 6px 10px 10px;
  font-size: 1.6rem;
`;

const ButtonSearch = styled.button`
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #efefef;
  cursor: pointer;
  font-size: 1.6rem;
`;
