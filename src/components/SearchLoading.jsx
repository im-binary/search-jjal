import styled from "styled-components";

export function SearchLoading({ keyword }) {
  const loadingText = `${keyword} 관련된 gif를 불러오는 중이에요.`;

  return (
    <Section>
      <p>
        {loadingText.split(" ").map((text, index) => (
          <span style={{ animationDelay: `0.${index + 1}s` }} key={text}>
            {text}{" "}
          </span>
        ))}
      </p>
    </Section>
  );
}

const Section = styled.section`
  min-height: calc(100vh - 57.5px);

  @keyframes anime_textup {
    0% {
      top: 0;
    }

    50% {
      top: -0.3em;
    }

    100% {
      top: 0;
    }
  }

  p {
    text-align: center;
    margin-top: 20px;
    font-size: 1.6rem;
    word-break: keep-all;

    span {
      position: relative;
      animation: anime_textup 1.3s linear infinite;
      letter-spacing: 0.1em;
    }

    span:nth-of-type(1) {
      font-weight: bold;
    }
  }
`;
