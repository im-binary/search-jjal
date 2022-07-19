import styled from "styled-components";
import SearchList from "./pages/SearchList";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <SectionAppContainer>
      <GlobalStyle />
      <SearchList />
    </SectionAppContainer>
  );
}

const SectionAppContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
`;

export default App;
