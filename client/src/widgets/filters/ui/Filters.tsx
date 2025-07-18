import { useFiltersStore } from "@entities/filters";
import {
  type TaskCategory,
  type TaskPriority,
  type TaskStatus,
} from "@entities/task-item";
import { Button, Group, MultiSelect } from "@mantine/core";

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

export const Filters = () => {
  const filters = useFiltersStore((state) => state.filters);
  const setFilters = useFiltersStore((state) => state.setFilters);
  const resetFilters = useFiltersStore((state) => state.resetFilters);

  const handleStatusChange = (values: string[]) => {
    setFilters(values as TaskStatus[], "statuses");
  };

  const handleCategoryChange = (values: string[]) => {
    setFilters(values as TaskCategory[], "categories");
  };

  const handlePriorityChange = (values: string[]) => {
    setFilters(values as TaskPriority[], "priorities");
  };

  return (
    <Group mb="xl">
      <MultiSelect
        placeholder="Статус"
        data={statusOptions}
        value={filters.statuses}
        onChange={handleStatusChange}
        clearable
        comboboxProps={{ width: 200, position: "bottom-start" }}
      />
      <MultiSelect
        placeholder="Категория"
        data={categoryOptions}
        value={filters.categories}
        onChange={handleCategoryChange}
        clearable
        comboboxProps={{ width: 200, position: "bottom-start" }}
      />
      <MultiSelect
        placeholder="Приоритет"
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
