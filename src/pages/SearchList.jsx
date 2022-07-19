import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Image from "../components/Image";
import SearchInput from "../components/SearchInput";
import FavoriteButton from "../components/FavoriteButton";

export default function SearchList() {
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState("cat");
  const [favorite, setFavorite] = useState([]);

  const gifAPIurl = `https://api.giphy.com/v1/gifs/search?api_key=A1XrfRGc2MX7wmZktzh08ZucZJztvS7E&q=${keyword}&limit=20`;

  const gifApi = async () => {
    const response = await axios.get(gifAPIurl);
    const dataList = response.data.data.filter((el) => el.images.preview_gif.size < 49999);
    setList(dataList);
  };

  useEffect(() => {
    gifApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  return (
    <section>
      <SearchInput setKeyword={setKeyword} gifApi={gifApi} />
      <UlGifListContainer>
        {list.length > 0 ? (
          list.map((item) => (
            <li key={item.id}>
              <Image src={item.images.original.url} alt={item.title} />

              <FavoriteButton imgSrc={item.images.original.url} favorite={favorite} setFavorite={setFavorite} />
            </li>
          ))
        ) : (
          <p>검색결과가 없습니다</p>
        )}
      </UlGifListContainer>
    </section>
  );
}

const UlGifListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 926px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  @media (max-width: 634px) {
    grid-template-columns: 1fr;
  }
`;
