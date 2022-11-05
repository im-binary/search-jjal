import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styled from "styled-components";
import SearchList from "./pages/SearchList";
import GlobalStyle from "./styles/GlobalStyle";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SectionAppContainer>
        <GlobalStyle />
        <SearchList />
      </SectionAppContainer>
    </QueryClientProvider>
  );
}

const SectionAppContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
`;

export default App;
