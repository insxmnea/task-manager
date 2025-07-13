import { useMemo, type FC } from "react";
import { SimpleGrid, Title, Container, Text } from "@mantine/core";
import { useTaskContext } from "src/entities/task-item";
import { TaskItem } from "src/widgets/task-item";
import { Filters } from "src/widgets/filters";

export const TaskList: FC = () => {
  const { filteredTasks } = useTaskContext();

  const tasksGrid = useMemo(
    () => (
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </SimpleGrid>
    ),
    [filteredTasks]
  );

  return (
    <Container size="xl" mb="xl">
      <Title order={1} mb="xl">
        Список задач
      </Title>

      <Filters />

      {filteredTasks.length === 0 ? (
        <Text mt="xl" size="lg">
          Задачи не найдены.
        </Text>
      ) : (
        tasksGrid
      )}
    </Container>
  );
};
