import React, { useState } from "react";
import styled from "styled-components";

export default function FavoriteZone({ favorite, setFavorite, handleDelete }) {
  const [dragAndDrop, setDragAndDrop] = useState({
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: [],
  });

  const handleDragStart = (e) => {
    e.currentTarget.style.opacity = "0.4";

    const initalPosition = e.currentTarget.dataset.position;

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initalPosition,
      originalOrder: favorite,
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();

    let newFavoriteList = dragAndDrop.originalOrder;

    const draggedFrom = dragAndDrop.draggedFrom;
    const draggedTo = e.currentTarget.dataset.position;
    const itemDragged = newFavoriteList[draggedFrom];

    const remainingItems = newFavoriteList.filter((_, index) => index !== Number(draggedFrom));

    newFavoriteList = [...remainingItems.slice(0, draggedTo), itemDragged, ...remainingItems.slice(draggedTo)];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newFavoriteList,
        draggedTo: draggedTo,
      });
    }
  };

  const handleOnDrop = (e) => {
    setFavorite(dragAndDrop.updatedOrder);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
    });
  };

  const handleOnDragLeave = (e) => {
    e.currentTarget.classList.remove("over");
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  };

  const handleDragEnter = (e) => {
    e.currentTarget.classList.add("over");
  };

  const handleDragEnd = (e) => {
    e.currentTarget.style.opacity = "1";
    const favoriteListItem = document.querySelectorAll(".draggable");
    favoriteListItem.forEach((item) => {
      item.classList.remove("over");
    });
  };

  return (
    <HeartSection>
      {favorite.map((item, index) => (
        <div
          className='draggable'
          key={index}
          data-position={index} //  dataset에 index값을 주어 선택된 index를 찾을 수 있습니다.
          onDragStart={handleDragStart} //  ex) event.currentTarget.dataset.position
          onDragOver={handleDragOver}
          onDragLeave={handleOnDragLeave}
          onDrop={handleOnDrop}
          onDragEnter={handleDragEnter}
          onDragEnd={handleDragEnd}
        >
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
  cursor: move;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

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
