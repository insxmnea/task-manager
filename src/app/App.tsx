import { MantineProvider } from "@mantine/core";
import { AppRouter } from "./router";
import "@mantine/core/styles.css";
import "./globals.css";
import { Header } from "@widgets/header";
import { TaskProvider } from "@entities/task-item";

function App() {
  return (
    <>
      <MantineProvider>
        <TaskProvider>
          <Header />
          <AppRouter />
        </TaskProvider>
      </MantineProvider>
    </>
  );
}

export default App;
