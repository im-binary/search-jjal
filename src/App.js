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
  padding-top: 20px;
  background: linear-gradient(90deg, #624479, #1f043d);
`;

export default App;
