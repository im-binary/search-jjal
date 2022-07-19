import React from "react";

export default function FavoriteButton({ imgSrc, heart, setHeart, favorite, setFavorite }) {
  const handleHeartClick = (e) => {
    setFavorite([...favorite, imgSrc]);

    if (favorite.includes(imgSrc)) {
      setFavorite(favorite.filter((item) => item !== imgSrc));
    }
  };

  return <button onClick={handleHeartClick}>{favorite.includes(imgSrc) ? "💖" : "🤍"}</button>;
}
