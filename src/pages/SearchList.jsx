import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Image } from "../components/Image";
import SearchInput from "../components/SearchInput";
// import FavoriteButton from "../components/FavoriteButton";
import FavoriteZone from "../components/FavoriteZone";
import { searchGif } from "../apis/searchGif";
import { useInfiniteQuery } from "@tanstack/react-query";
import qs from "qs";

export default function SearchList() {
  const { q } = qs.parse(window.location.search.slice(1));

  const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem("favorite")) || []);
  const [open, setOpen] = useState(false);

  const response = useInfiniteQuery(
    ["searchGif", q],
    ({ pageParam = 1 }) => searchGif({ keyword: q, pageNumber: pageParam }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (!lastPage.isLast) {
          return lastPage.nextPage;
        }
      },
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: 1,
    }
  );

  const { data, isLoading, fetchNextPage } = response;

  const handleDelete = (imgSrc) => {
    setFavorite(favorite.filter((item) => item !== imgSrc));
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {}, []);

  if (isLoading) {
    return <>로딩중</>;
  }

  const list = data.pages.map((x) => x.result).flat();

  return (
    <article>
      <SearchInput />
      <FavoriteZoneButton onClick={handleOpen}>❤️</FavoriteZoneButton>
      {open ? <FavoriteZone favorite={favorite} setFavorite={setFavorite} handleDelete={handleDelete} /> : null}
      <UlGifListContainer>
        {list.length > 0 ? (
          list
            .filter(
              (item) =>
                Number(item.images.original.height / item.images.original.width) < 1.5 &&
                Number(item.images.original.width / item.images.original.height) < 1.5
            )
            .map((item) => {
              const height = (250 * item.images.original.height) / item.images.original.width;
              const width = (height * item.images.original.width) / item.images.original.height;

              return (
                <li
                  key={item.id}
                  style={{
                    height: `${(250 * item.images.original.height) / item.images.original.width}px`,
                    gridRowEnd: `span ${Math.floor(
                      Number((250 * item.images.original.height) / item.images.original.width) / 20
                    )}`,
                  }}
                >
                  <Image src={item.images.original.url} alt={item.title} width={width} />
                  {/* <FavoriteButton imgSrc={item.images.original.url} favorite={favorite} setFavorite={setFavorite} /> */}
                </li>
              );
            })
        ) : (
          <p>검색결과가 없습니다</p>
        )}
      </UlGifListContainer>
      <div onClick={fetchNextPage}>더보기</div>
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

  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-auto-rows: 20px;
  justify-content: center;
  gap: 5px 24px;

  li {
    width: 100%;
    background: #eeecf3;
    /* padding: 10px; */
    border-radius: 10px;
    box-shadow: 3px 3px 10px rgb(0 0 0 / 36%);
    transition: 500ms ease-in-out;
    overflow: hidden;
  }

  li:hover {
    transition: 500ms ease-in-out;
    transform: scale(1.03);
  }

  @media (max-width: 926px) {
    /* grid-template-columns: 1fr 1fr; */
    /* gap: 15px; */
    /* column-count: 2; */
  }

  @media (max-width: 634px) {
    /* grid-template-columns: 1fr; */
    /* column-count: 1; */
  }
`;
