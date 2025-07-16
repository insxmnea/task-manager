import { useMemo } from "react";
import { SimpleGrid, Title, Container, Text } from "@mantine/core";
import { TaskItem } from "@widgets/task-item";
import { Filters } from "@widgets/filters";
import { useTasksStore } from "@entities/task-item";

export const TaskList = () => {
  const tasks = useTasksStore((state) => state.tasks);
  const filters = useTasksStore((state) => state.filters);

  const filteredTasks = tasks.filter((task) => {
    const statuses = filters.statuses;
    if (statuses.length > 0 && !statuses.includes(task.status)) {
      return false;
    }

    const categories = filters.categories;
    if (categories.length > 0 && !categories.includes(task.category)) {
      return false;
    }

    const priorities = filters.priorities;
    if (priorities.length > 0 && !priorities.includes(task.priority)) {
      return false;
    }

    return true;
  });

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
