export type TaskCategory =
  | "Bug"
  | "Feature"
  | "Documentation"
  | "Refactor"
  | "Test";
export type TaskStatus = "To Do" | "In Progress" | "Done";
export type TaskPriority = "Low" | "Medium" | "High";

export interface Task {
  id: string;
  title: string;
  description: string;
  category: TaskCategory;
  status: TaskStatus;
  priority: TaskPriority;
}

export type TaskFormValues = Omit<Task, "id">;

export type TaskFilters = {
  statuses: TaskStatus[];
  categories: TaskCategory[];
  priorities: TaskPriority[];
};

export type FilterType = keyof TaskFilters;

export interface TaskState {
  tasks: Task[];
  addTask: (task: Task) => void;
  getTask: (id: string) => Task | undefined;
  updateTask: (id: string, values: TaskFormValues) => void;
  filters: TaskFilters;
  setFilters: <T extends FilterType>(values: TaskFilters[T], type: T) => void;
  resetFilters: () => void;
}
