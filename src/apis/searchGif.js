import { get } from "./http";

// @see https://developers.giphy.com/docs/optional-settings/#language-support

const PAGE_SIZE = 25;

export async function searchGif({ keyword, pageNumber }) {
  const response = await get({
    url: "/v1/gifs/search",
    params: {
      api_key: "J43xKsQiTF9zEhHfUhTzoGJ4431QzGrP",
      q: keyword,
      limit: PAGE_SIZE,
      offset: PAGE_SIZE * (pageNumber - 1),
      rating: "g",
      lang: "en",
    },
  });
  const { data, pagination } = response.data;
  const { count, offset, total_count } = pagination;

  return {
    result: data,
    nextPage: pageNumber + 1,
    isLast: count + offset >= total_count,
  };
}
