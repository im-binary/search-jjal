import React, { useCallback } from "react";
import styled from "styled-components";
import Loading from "./Loading";

export default function Image({ src, alt }) {
  const [loading, setLoading] = React.useState(true);

  const onLoad = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Img onLoad={onLoad} src={src} alt={alt} />
    </>
  );
}

const Img = styled.img`
  width: 100%;
  display: ${(props) => (props.loading ? "none" : "block")};
`;
