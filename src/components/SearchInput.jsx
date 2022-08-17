import React from "react";
import styled from "styled-components";

export default function SearchInput({ setKeyword, gifApi }) {
  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
  };

  return (
    <Header>
      <label htmlFor='searchKeyword'>
        <InputSearch name='searchKeyword' type='text' onChange={handleChange} placeholder='cat' />
      </label>
      <ButtonSearch onClick={gifApi}>검색</ButtonSearch>
    </Header>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
  z-index: 999;
`;

const InputSearch = styled.input`
  width: calc(100% - 100px);
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
`;

const ButtonSearch = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;
