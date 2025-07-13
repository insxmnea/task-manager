import { type FC } from "react";
import { SimpleGrid, Title, Container } from "@mantine/core";
import { useTaskContext } from "src/entities/task-item";
import { TaskItem } from "src/widgets/task-item";

export const TaskList: FC = () => {
  const { tasks } = useTaskContext();

  return (
    <Container size="xl" mb="xl">
      <Title order={1} mb="xl">
        Список задач
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </SimpleGrid>
    </Container>
  );
};
