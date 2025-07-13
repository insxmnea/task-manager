import { MantineProvider } from "@mantine/core";
import { AppRouter } from "./router";
import { TaskProvider } from "src/entities/task-item";
import { Header } from "src/widgets/header";
import "@mantine/core/styles.css";
import "./globals.css";

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
