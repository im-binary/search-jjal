import React from "react";

export default function FavoriteButton({ imgSrc, favorite, setFavorite }) {
  const handleHeartClick = () => {
    setFavorite([...favorite, imgSrc]);

    if (favorite.includes(imgSrc)) {
      setFavorite(favorite.filter((item) => item !== imgSrc));
    }
  };

  return <button onClick={handleHeartClick}>{favorite.includes(imgSrc) ? "💖" : "🤍"}</button>;
}
