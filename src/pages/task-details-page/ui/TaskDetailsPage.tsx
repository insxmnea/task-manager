import { useTasksStore } from "@entities/task-item";
import { Container, Title } from "@mantine/core";
import { TaskCreationDate } from "@shared/ui/task-creation-date";
import { TaskForm } from "@widgets/task-form";
import { useParams } from "react-router-dom";

export const TaskDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const getTask = useTasksStore((state) => state.getTask);
  const task = getTask(id as string);

  if (!task) return <div>Задача не найдена</div>;

  return (
    <Container size="sm">
      <Title order={1} mb="xl">
        Редактирование задачи
      </Title>

      <TaskCreationDate dateOfCreation={task.dateOfCreation} />

      <TaskForm task={task} />
    </Container>
  );
};
