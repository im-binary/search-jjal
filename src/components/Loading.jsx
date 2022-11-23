import styled from "styled-components";

export function Loading() {
  return (
    <LoadingSpace>
      <p>Loading...</p>
    </LoadingSpace>
  );
}

const LoadingSpace = styled.article`
  height: 100%;
  animation: skeletonGradient 2s linear infinite;

  p {
    text-indent: -99999px;
  }

  @keyframes skeletonGradient {
    0% {
      background-color: #a5a5a5;
    }
    50% {
      background-color: #a5a5a5;
      opacity: 0.7;
    }
    100% {
      background-color: #a5a5a5;
    }
  }
`;
