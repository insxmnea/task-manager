import type {
  TaskCategory,
  TaskPriority,
  TaskStatus,
} from "@entities/task-item";

export type TaskFilters = {
  statuses: TaskStatus[];
  categories: TaskCategory[];
  priorities: TaskPriority[];
};

export type FilterType = keyof TaskFilters;

export interface FilterState {
  filters: TaskFilters;
  setFilters: <T extends FilterType>(values: TaskFilters[T], type: T) => void;
  resetFilters: () => void;
}
