import type { Task, TaskFormValues } from "@entities/task-item";

const API_URL = "http://localhost:3000/tasks";

export const TasksAPI = {
  getTasks: async () => {
    const response = await fetch(`${API_URL}/`);
    return await response.json();
  },

  getTask: async (id: string): Promise<Task> => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
  },

  deleteTask: async (id: string) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  },

  updateTask: async (id: string, task: TaskFormValues): Promise<Task> => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    return response.json();
  },

  createTask: async (
    task: Omit<Task, "id" | "dateOfCreation">
  ): Promise<Task> => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    return response.json();
  },
};
