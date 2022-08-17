import React from "react";
import styled from "styled-components";

export default function FavoriteZone({ favorite, handleDelete }) {
  return (
    <HeartSection>
      {favorite.map((item, index) => (
        <div key={`favorite-${index}`}>
          <button onClick={() => handleDelete(item)}>💔</button>
          <img src={item} alt='' />
        </div>
      ))}
    </HeartSection>
  );
}

const HeartSection = styled.section`
  margin-top: 50px;
  padding: 20px;
  background-color: #eaeaea;
  height: 300px;
  display: flex;
  overflow-x: scroll;
  gap: 10px;

  div {
    position: relative;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 2px 4px;
  }

  img {
    height: 100%;
  }
`;
