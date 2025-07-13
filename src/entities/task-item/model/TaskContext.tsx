import { createContext } from "react";
import type { Task, TaskFormValues } from "../types/models";

interface TaskContextType {
  tasks: Task[];
  getTask: (id: string) => Task | undefined;
  updateTask: (id: string, values: TaskFormValues) => void;
  addTask: (task: Task) => void;
}

export const TaskContext = createContext<TaskContextType | null>(null);
