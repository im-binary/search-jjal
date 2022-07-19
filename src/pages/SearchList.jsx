import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SearchList() {
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState("cat");

  useEffect(() => {
    axios
      .get(`https://api.giphy.com/v1/gifs/search?api_key=A1XrfRGc2MX7wmZktzh08ZucZJztvS7E&q=${keyword}`)
      .then((res) => {
        setList(res.data.data);
      });
    return () => {};
  }, [keyword]);

  const handleClick = () => {
    axios
      .get(`https://api.giphy.com/v1/gifs/search?api_key=A1XrfRGc2MX7wmZktzh08ZucZJztvS7E&q=${keyword}`)
      .then((res) => {
        setList(res.data.data);
      });
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
  };
  return (
    <section>
      <label htmlFor='searchKeyword'></label>
      <input name='searchKeyword' type='text' onChange={handleChange} />
      <button onClick={handleClick}>검색</button>
      <ul>
        {list.map((item, i) => (
          <li>
            <img src={item.images.original.url} key={item.id} alt={item.title} />
          </li>
        ))}
      </ul>
    </section>
  );
}
