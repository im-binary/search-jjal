import styled from "styled-components";
import { Image } from "./Image";
import { useInfiniteQuery } from "@tanstack/react-query";
import { searchGif } from "../apis/searchGif";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { TopButton } from "./TopButton";

// TODO: downsized_small 로 하려면 mp4를 보여주도록 개선해야함
// const TYPE = "original";
// const TYPE = "preview_webp";
const TYPE = "downsized";

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

  const isLast = data.pages.map((x) => x.isLast).pop();

  const { bottomRef } = useIntersectionObserver(fetchNextPage);

  const list = data.pages
    .map((x) => x.result)
    .flat()
    .map((item) => {
      const itemStyle = {
        gridRowEnd: `span ${Math.floor(Number((250 * item.images[TYPE].height) / item.images[TYPE].width) / 20)}`,
      };

      return { ...item, itemStyle };
    });

  if (list.length === 0 || list == null) {
    return <EmptyResult>검색결과가 없습니다</EmptyResult>;
  }

  return (
    <>
      <UlGifListContainer>
        {list.length > 0 &&
          list.map((item, index) => (
            <li key={`${item.id}-${index}`} style={item?.itemStyle}>
              <Image src={item.images[TYPE].url} alt={item.title} width={item.width} />
            </li>
          ))}
      </UlGifListContainer>
      <TopButton />
      {!isLast && (
        <More ref={bottomRef}>
          <span onClick={fetchNextPage}>더 보기</span>
        </More>
      )}
    </>
  );
}

const EmptyResult = styled.p`
  margin-top: 20px;
  text-align: center;
`;

const UlGifListContainer = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;

  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-auto-rows: 20px;
  justify-content: center;
  gap: 14px;

  li {
    width: 100%;
    border-radius: 10px;
    box-shadow: 3px 3px 10px rgb(0 0 0 / 36%);
    transition: 0.5s ease-in-out;
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
