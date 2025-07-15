import React from "react";
import { Card, Text, Group, Badge, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import type { Task } from "@entities/task-item";
import { ROUTES } from "@app/router";

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

export const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
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
        component={Link}
        to={`${ROUTES.TASKDETAILSPAGE}/${task.id}`}
        variant="light"
        color="blue"
        fullWidth
        mt="auto"
      >
        Редактировать
      </Button>
    </Card>
  );
};
