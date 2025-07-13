import { createContext } from "react";
import type { Task, TaskFilters, TaskFormValues } from "../types/models";

interface TaskContextType {
  tasks: Task[];
  getTask: (id: string) => Task | undefined;
  filteredTasks: Task[];
  filters: TaskFilters;
  setFilters: (filters: TaskFilters) => void;
  updateTask: (id: string, values: TaskFormValues) => void;
  addTask: (task: Task) => void;
}

export const TaskContext = createContext<TaskContextType | null>(null);
