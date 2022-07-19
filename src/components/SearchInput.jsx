import React from "react";
import styled from "styled-components";

export default function SearchInput({ setKeyword, gifApi }) {
  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
  };
  return (
    <>
      <label htmlFor='searchKeyword'>
        <InputSearch name='searchKeyword' type='text' onChange={handleChange} />
      </label>
      <ButtonSearch onClick={gifApi}>검색</ButtonSearch>
    </>
  );
}

const InputSearch = styled.input`
  width: calc(100% - 100px);
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
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
