import axios from "axios";

// https://api.giphy.com/v1/gifs/search?api_key=J43xKsQiTF9zEhHfUhTzoGJ4431QzGrP&q=${keyword}&limit=${limit}&offset=${offset}&rating=g&lang=en

const instance = axios.create({
  baseURL: "https://api.giphy.com/",
  timeout: 30_000,
});

export const get = ({ url, params }) => {
  return instance.get(url, { params });
};
