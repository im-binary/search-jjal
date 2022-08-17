import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Image from "../components/Image";
import SearchInput from "../components/SearchInput";
import FavoriteButton from "../components/FavoriteButton";
import FavoriteZone from "../components/FavoriteZone";

export default function SearchList() {
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState("cat");
  const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem("favorite")) || []);
  const [open, setOpen] = useState(false);

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

  const handleDelete = (imgSrc) => {
    setFavorite(favorite.filter((item) => item !== imgSrc));
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <article>
      <SearchInput setKeyword={setKeyword} gifApi={gifApi} />
      <FavoriteZoneButton onClick={handleOpen}>❤️</FavoriteZoneButton>
      {open ? <FavoriteZone favorite={favorite} setFavorite={setFavorite} handleDelete={handleDelete} /> : null}
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
    </article>
  );
}

const FavoriteZoneButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 3px 3px 10px rgb(0 0 0 / 36%);
`;

const UlGifListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 70px;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: flex-start;
  gap: 15px; */
  column-count: 3;

  li {
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    background: #eeecf3;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 10px rgb(0 0 0 / 36%);
    transition: 500ms ease-in-out;
  }

  li:hover {
    transition: 500ms ease-in-out;
    transform: scale(1.03);
  }

  @media (max-width: 926px) {
    /* grid-template-columns: 1fr 1fr; */
    /* gap: 15px; */
    column-count: 2;
  }

  @media (max-width: 634px) {
    /* grid-template-columns: 1fr; */
    column-count: 1;
  }
`;
