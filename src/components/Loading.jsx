import React from "react";
import styled from "styled-components";

export default function Loading({ width = 300 }) {
  return <LoadingSpace width={width}>Loading...</LoadingSpace>;
}

const LoadingSpace = styled.article`
  width: ${(props) => props.width}px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
