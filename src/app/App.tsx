import { MantineProvider } from "@mantine/core";
import { AppRouter } from "./router";
import "@mantine/core/styles.css";
import "./globals.css";
import { Header } from "@widgets/header";

function App() {
  return (
    <>
      <MantineProvider>
        <Header />
        <AppRouter />
      </MantineProvider>
    </>
  );
}

export default App;
