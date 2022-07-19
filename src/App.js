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
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export default App;
