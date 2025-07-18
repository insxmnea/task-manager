import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Task, TaskFormValues } from "../types/models";
import { TasksAPI } from "./TasksAPI";

export const taskKeys = {
  all: ["tasks"] as const,
  lists: () => [...taskKeys.all, "list"] as const,
  details: () => [...taskKeys.all, "detail"] as const,
  detail: (id: string) => [...taskKeys.details(), id] as const,
};

export const useTasks = () => {
  return useQuery<Task[]>({
    queryKey: taskKeys.lists(),
    queryFn: TasksAPI.getTasks,
  });
};

export const useTask = (id: string) => {
  return useQuery<Task>({
    queryKey: taskKeys.detail(id),
    queryFn: () => TasksAPI.getTask(id),
    enabled: !!id,
  });
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: TasksAPI.createTask,
    onSuccess: (newTask) => {
      queryClient.setQueryData<Task[]>(taskKeys.lists(), (old = []) => [
        ...old,
        newTask,
      ]);
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: TaskFormValues }) =>
      TasksAPI.updateTask(id, data),
    onSuccess: (updatedTask) => {
      queryClient.setQueryData(taskKeys.detail(updatedTask.id), updatedTask);

      queryClient.setQueryData<Task[]>(taskKeys.lists(), (old = []) =>
        old.map((task) => (task.id === updatedTask.id ? updatedTask : task))
      );
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: TasksAPI.deleteTask,
    onSuccess: (_, id) => {
      queryClient.setQueryData<Task[]>(taskKeys.lists(), (old = []) =>
        old.filter((task) => task.id !== id)
      );

      queryClient.removeQueries({ queryKey: taskKeys.detail(id) });
    },
  });
};
