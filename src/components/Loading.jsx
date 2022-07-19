import React from "react";
import styled from "styled-components";

export default function Loading() {
  return <LoadingSpace>Loading...</LoadingSpace>;
}

const LoadingSpace = styled.article`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
