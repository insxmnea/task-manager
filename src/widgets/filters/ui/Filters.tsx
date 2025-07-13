import { Button, Group, MultiSelect } from "@mantine/core";
import { type FC } from "react";
import {
  useTaskContext,
  type TaskCategory,
  type TaskPriority,
  type TaskStatus,
} from "src/entities/task-item";

const statusOptions = [
  { value: "To Do", label: "To Do" },
  { value: "In Progress", label: "In Progress" },
  { value: "Done", label: "Done" },
];

const categoryOptions = [
  { value: "Bug", label: "Bug" },
  { value: "Feature", label: "Feature" },
  { value: "Documentation", label: "Documentation" },
  { value: "Refactor", label: "Refactor" },
  { value: "Test", label: "Test" },
];

const priorityOptions = [
  { value: "Low", label: "Low" },
  { value: "Medium", label: "Medium" },
  { value: "High", label: "High" },
];

export const Filters: FC = () => {
  const { filters, setFilters } = useTaskContext();

  const handleStatusChange = (values: string[]) => {
    setFilters({ ...filters, statuses: values as TaskStatus[] });
  };

  const handleCategoryChange = (values: string[]) => {
    setFilters({ ...filters, categories: values as TaskCategory[] });
  };

  const handlePriorityChange = (values: string[]) => {
    setFilters({ ...filters, priorities: values as TaskPriority[] });
  };

  const resetFilters = () => {
    setFilters({
      statuses: [],
      categories: [],
      priorities: [],
    });
  };

  return (
    <Group mb="xl">
      <MultiSelect
        label="Статус"
        data={statusOptions}
        value={filters.statuses}
        onChange={handleStatusChange}
        clearable
        comboboxProps={{ width: 200, position: "bottom-start" }}
      />
      <MultiSelect
        label="Категория"
        data={categoryOptions}
        value={filters.categories}
        onChange={handleCategoryChange}
        clearable
        comboboxProps={{ width: 200, position: "bottom-start" }}
      />
      <MultiSelect
        label="Приоритет"
        data={priorityOptions}
        value={filters.priorities}
        onChange={handlePriorityChange}
        clearable
        comboboxProps={{ width: 200, position: "bottom-start" }}
      />

      <Button
        ml={"auto"}
        mt={"auto"}
        variant="outline"
        onClick={resetFilters}
        disabled={
          !filters.statuses.length &&
          !filters.categories.length &&
          !filters.priorities.length
        }
      >
        Сбросить фильтры
      </Button>
    </Group>
  );
};
