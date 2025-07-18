import { Container, Title } from "@mantine/core";
import { TaskForm } from "@widgets/task-form";

export const CreateTaskPage = () => {
  return (
    <Container size="sm">
      <Title order={1} mb="xl">
        Создание задачи
      </Title>

      <TaskForm />
    </Container>
  );
};
