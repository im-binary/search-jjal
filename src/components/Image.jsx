import { useCallback, useState } from "react";
import styled from "styled-components";
import Loading from "./Loading";

export function Image({ src, alt, width }) {
  const [loading, setLoading] = useState(true);

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
  height: 100%;
  object-fit: cover;
  display: ${(props) => (props.loading ? "none" : "block")};
`;
