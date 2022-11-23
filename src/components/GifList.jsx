import styled from "styled-components";
import React from "react";
import { Image } from "./Image";
import { useInfiniteQuery } from "@tanstack/react-query";
import { searchGif } from "../apis/searchGif";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// TODO: downsized_small 로 하려면 mp4를 보여주도록 개선해야함
// const TYPE = "original";
const TYPE = "preview_webp";

export function GifList({ keyword }) {
  const { data, fetchNextPage } = useInfiniteQuery(
    ["searchGif", keyword],
    ({ pageParam = 1 }) => searchGif({ keyword, pageNumber: pageParam }),
    {
      getNextPageParam: (lastPage) => (!lastPage.isLast ? lastPage.nextPage : undefined),
      retry: 1,
      suspense: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
    }
  );

  const { bottomRef } = useIntersectionObserver(fetchNextPage);
  const list = data.pages
    .map((x) => x.result)
    .flat()
    .filter(
      (item) =>
        Number(item.images[TYPE].height / item.images[TYPE].width) < 1.5 &&
        Number(item.images[TYPE].width / item.images[TYPE].height) < 1.5
    )
    .map((item) => {
      const itemStyle = {
        gridRowEnd: `span ${Math.floor(Number((250 * item.images[TYPE].height) / item.images[TYPE].width) / 20)}`,
      };

      return { ...item, itemStyle };
    });

  return (
    <>
      <UlGifListContainer>
        {list.length > 0 ? (
          list.map((item) => {
            return (
              <li key={item.id} style={item.itemStyle}>
                <Image src={item.images[TYPE].url} alt={item.title} width={item.width} />
                {/* <FavoriteButton imgSrc={item.images[TYPE].url} favorite={favorite} setFavorite={setFavorite} /> */}
              </li>
            );
          })
        ) : (
          <p>검색결과가 없습니다</p>
        )}
      </UlGifListContainer>
      <More ref={bottomRef}>
        <span onClick={fetchNextPage}>더 보기</span>
      </More>
    </>
  );
}

const UlGifListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 70px;

  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-auto-rows: 20px;
  justify-content: center;
  gap: 14px;

  li {
    width: 100%;
    background: #eeecf3;
    border-radius: 10px;
    box-shadow: 3px 3px 10px rgb(0 0 0 / 36%);
    transition: 500ms ease-in-out;
    overflow: hidden;
  }

  li:hover {
    transition: 500ms ease-in-out;
    transform: scale(1.03);
  }
`;

const More = styled.div`
  text-align: center;
  color: white;
  font-weight: bold;
  padding: 10px;

  height: 1050px;
  margin-top: -1000px;
  display: flex;
  justify-content: center;
  align-items: end;

  span {
    cursor: pointer;
  }
`;
