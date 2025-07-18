import React from "react";
import { Card, Text, Group, Badge, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { useDeleteTask, type Task } from "@entities/task-item";
import { ROUTES } from "@app/router";
import styles from "./TaskItem.module.css";
import { TaskCreationDate } from "@shared/ui/task-creation-date";

const categoryColors = {
  Bug: "red",
  Feature: "blue",
  Documentation: "teal",
  Refactor: "violet",
  Test: "yellow",
};

const priorityColors = {
  High: "red",
  Medium: "yellow",
  Low: "green",
};

interface Props {
  task: Task;
}

export const TaskItem = ({ task }: Props) => {
  const deleteMutation = useDeleteTask();

  const handleDeleteTask = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    deleteMutation.mutate(task.id);
  };

  return (
    <Card
      component={Link}
      to={`${ROUTES.TASKDETAILSPAGE}/${task.id}`}
      className={styles.card}
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
    >
      <TaskCreationDate dateOfCreation={task.dateOfCreation} />

      <Text size="lg" mb="xs">
        {task.title}
      </Text>

      <Text size="sm" c="dimmed" mb="md">
        {task.description || "Без описания"}
      </Text>

      <Group mb="md">
        <Badge color={categoryColors[task.category]}>{task.category}</Badge>
        <Badge variant="outline" color={priorityColors[task.priority]}>
          {task.priority}
        </Badge>
        <Badge color={task.status === "Done" ? "green" : "blue"}>
          {task.status}
        </Badge>
      </Group>

      <Button
        mt={"auto"}
        color="red"
        variant="light"
        fullWidth
        onClick={handleDeleteTask}
      >
        Удалить
      </Button>
    </Card>
  );
};
