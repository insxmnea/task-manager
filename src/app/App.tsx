import { MantineProvider } from "@mantine/core";
import { AppRouter } from "./router";
import { TaskProvider } from "src/entities/task-item";
import { Header } from "src/widgets/header";
import "@mantine/core/styles.css";
import "./globals.css";
import { Footer } from "src/widgets/footer";

function App() {
  return (
    <>
      <MantineProvider>
        <TaskProvider>
          <Header />
          <AppRouter />
          <Footer />
        </TaskProvider>
      </MantineProvider>
    </>
  );
}

export default App;
