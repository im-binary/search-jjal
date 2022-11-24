import { useEffect, useState } from "react";
import styled from "styled-components";

export function TopButton() {
  const [isTop, setTop] = useState(false);

  useEffect(() => {
    const updateButtonVisible = () => {
      if (window.scrollY > 130) {
        setTop(true);
      } else {
        setTop(false);
      }
    };

    window.addEventListener("scroll", updateButtonVisible);

    return () => {
      window.removeEventListener("scroll", updateButtonVisible);
    };
  }, []);

  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button className={isTop ? "visible" : "unvisible"} onClick={handleTopClick}>
      <span>🔝</span>
    </Button>
  );
}

const Button = styled.button`
  &.unvisible {
    display: none;
  }

  &.visible {
    color: #000;
    display: block;
    position: fixed;
    bottom: 106px;
    right: 28px;
    font-size: 2.5rem;
    padding: 10px;
    border-radius: 20px;
    background-color: #efefef;
  }
`;
