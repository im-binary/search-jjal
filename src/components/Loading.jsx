import React from "react";
import styled from "styled-components";

export default function Loading({ width = 300 }) {
  return (
    <LoadingSpace>
      <p>Loading...</p>
    </LoadingSpace>
  );
}

const LoadingSpace = styled.article`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    animation: biggerAndSmaller 2s linear infinite;
    letter-spacing: 0.2em;
  }

  @keyframes biggerAndSmaller {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }
`;
