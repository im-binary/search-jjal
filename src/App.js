import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styled from "styled-components";
import { SearchListPage } from "./pages/SearchListPage";
import GlobalStyle from "./styles/GlobalStyle";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SectionAppContainer>
        <GlobalStyle />
        <SearchListPage />
      </SectionAppContainer>
    </QueryClientProvider>
  );
}

const SectionAppContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

export default App;
