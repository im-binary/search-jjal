import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Image from "../components/Image";
import SearchInput from "../components/SearchInput";

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

  return (
    <section>
      <SearchInput setKeyword={setKeyword} gifApi={gifApi} />
      <UlGifListContainer>
        {list.map((item) => (
          <li key={item.id}>
            <Image src={item.images.original.url} alt={item.title} />
          </li>
        ))}
      </UlGifListContainer>
    </section>
  );
}

const UlGifListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  justify-items: center;
  align-items: center;
  gap: 10px;
`;
