import { MantineProvider } from "@mantine/core";
import { AppRouter } from "./router";
import "@mantine/core/styles.css";
import "./globals.css";
import { Header } from "@widgets/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <Header />
          <AppRouter />
        </MantineProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
