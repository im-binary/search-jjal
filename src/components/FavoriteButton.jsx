import React from "react";
import styled from "styled-components";

export default function FavoriteButton({ imgSrc, favorite, setFavorite }) {
  const handleHeartClick = () => {
    setFavorite([...favorite, imgSrc]);

    if (favorite.includes(imgSrc)) {
      setFavorite(favorite.filter((item) => item !== imgSrc));
    }
  };

  return <Button onClick={handleHeartClick}>{favorite.includes(imgSrc) ? "💖" : "🤍"}</Button>;
}

const Button = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
  width: 100%;
  margin-top: 20px;
`;
