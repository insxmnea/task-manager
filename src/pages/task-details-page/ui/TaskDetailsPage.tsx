import { ROUTES } from "@app/router";
import { useTasksStore, type TaskFormValues } from "@entities/task-item";
import {
  Button,
  Container,
  Group,
  Select,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate, useParams } from "react-router-dom";

export const TaskDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const getTask = useTasksStore((state) => state.getTask);
  const updateTask = useTasksStore((state) => state.updateTask);

  const task = getTask(id as string);

  const form = useForm<TaskFormValues>({
    initialValues: {
      title: task?.title || "",
      description: task?.description || "",
      category: task?.category || "Bug",
      status: task?.status || "To Do",
      priority: task?.priority || "Medium",
    },

    validate: {
      title: (value) => (value.trim() ? null : "Название обязательно"),
    },
  });

  const handleSubmit = (values: TaskFormValues) => {
    if (id) {
      updateTask(id, values);
      navigate(ROUTES.HOMEPAGE);
    }
  };

  if (!task) return <div>Задача не найдена</div>;

  return (
    <Container size="sm">
      <Title order={1} mb="xl">
        Редактирование задачи
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Название"
          placeholder="Введите название задачи"
          {...form.getInputProps("title")}
          required
          mb="md"
        />

        <Textarea
          label="Описание"
          placeholder="Детали задачи"
          {...form.getInputProps("description")}
          autosize
          minRows={3}
          mb="md"
        />

        <Select
          label="Категория"
          data={[
            { value: "Bug", label: "Bug" },
            { value: "Feature", label: "Feature" },
            { value: "Documentation", label: "Documentation" },
            { value: "Refactor", label: "Refactor" },
            { value: "Test", label: "Test" },
          ]}
          {...form.getInputProps("category")}
          mb="md"
        />

        <Select
          label="Статус"
          data={[
            { value: "To Do", label: "To Do" },
            { value: "In Progress", label: "In Progress" },
            { value: "Done", label: "Done" },
          ]}
          {...form.getInputProps("status")}
          mb="md"
        />

        <Select
          label="Приоритет"
          data={[
            { value: "Low", label: "Low" },
            { value: "Medium", label: "Medium" },
            { value: "High", label: "High" },
          ]}
          {...form.getInputProps("priority")}
          mb="xl"
        />

        <Group>
          <Button variant="default" onClick={() => navigate(ROUTES.HOMEPAGE)}>
            Отмена
          </Button>
          <Button type="submit" color="blue">
            Сохранить
          </Button>
        </Group>
      </form>
    </Container>
  );
};
