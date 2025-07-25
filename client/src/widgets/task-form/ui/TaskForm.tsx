import { ROUTES } from "@app/router";
import {
  useCreateTask,
  useUpdateTask,
  type Task,
  type TaskFormValues,
} from "@entities/task-item";
import { Button, Group, Select, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";

interface Props {
  task?: Task;
}

export const TaskForm = (props: Props) => {
  const navigate = useNavigate();

  const createMutation = useCreateTask();
  const updateMutation = useUpdateTask();

  const form = useForm<TaskFormValues>({
    initialValues: {
      title: props.task?.title || "",
      description: props.task?.description || "",
      category: props.task?.category || "Bug",
      status: props.task?.status || "To Do",
      priority: props.task?.priority || "Medium",
    },

    validate: {
      title: (value) => (value.trim() ? null : "Название обязательно"),
    },
  });

  const handleSubmit = (values: TaskFormValues) => {
    if (props.task) {
      updateMutation.mutate({ id: props.task.id, data: values });
    } else {
      createMutation.mutate(values);
    }
    navigate(ROUTES.HOMEPAGE);
  };

  return (
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

      <Group justify="space-between">
        <Button variant="default" onClick={() => navigate(ROUTES.HOMEPAGE)}>
          Отмена
        </Button>

        <Group>
          <Button type="submit" color="blue">
            Сохранить
          </Button>
        </Group>
      </Group>
    </form>
  );
};
