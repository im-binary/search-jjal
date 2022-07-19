import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function SearchList() {
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState("cat");

  const gifAPIurl = `https://api.giphy.com/v1/gifs/search?api_key=A1XrfRGc2MX7wmZktzh08ZucZJztvS7E&q=${keyword}`;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const gifApi = async () => {
    const response = await axios.get(gifAPIurl);
    setList(response.data.data);
  };

  useEffect(() => {
    gifApi();
  }, [gifApi, keyword]);

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
  };

  return (
    <section>
      <label htmlFor='searchKeyword'></label>
      <InputSearch name='searchKeyword' type='text' onChange={handleChange} />
      <ButtonSearch onClick={gifApi}>검색</ButtonSearch>
      <UlGifListContainer>
        {list.map((item, i) => (
          <li key={item.id}>
            <img src={item.images.original.url} key={item.id} alt={item.title} />
          </li>
        ))}
      </UlGifListContainer>
    </section>
  );
}

const UlGifListContainer = styled.ul`
  list-style: none;
  padding: 0;
  img {
    width: 300px;
  }
`;

const InputSearch = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
`;

const ButtonSearch = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;
