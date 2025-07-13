import { useState, type ReactNode } from "react";
import type { Task, TaskFormValues } from "../types/models";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Исправить кнопку отправки",
      description: "Кнопка не реагирует на клики в мобильной версии",
      category: "Bug",
      status: "To Do",
      priority: "High",
    },
    {
      id: "2",
      title: "Добавить темную тему",
      description: "Реализовать переключение между светлой и темной темой",
      category: "Feature",
      status: "In Progress",
      priority: "Medium",
    },
    {
      id: "3",
      title: "Обновить документацию API",
      description: "Добавить новые endpoint в документацию Swagger",
      category: "Documentation",
      status: "Done",
      priority: "Low",
    },
    {
      id: "4",
      title: "Оптимизировать загрузку изображений",
      description: "Реализовать lazy loading для галереи",
      category: "Refactor",
      status: "In Progress",
      priority: "High",
    },
    {
      id: "5",
      title: "Написать тесты для модуля авторизации",
      description: "Покрыть Jest-тестами все сценарии входа",
      category: "Test",
      status: "To Do",
      priority: "Medium",
    },
    {
      id: "6",
      title: "Починить пагинацию",
      description: "Страница пагинации ломается при >100 элементах",
      category: "Bug",
      status: "To Do",
      priority: "High",
    },
    {
      id: "7",
      title: "Виджет погоды",
      description: "Добавить виджет с прогнозом погоды на дашборд",
      category: "Feature",
      status: "In Progress",
      priority: "Low",
    },
    {
      id: "8",
      title: "Руководство для новых разработчиков",
      description: "Создать инструкцию по настройке окружения",
      category: "Documentation",
      status: "Done",
      priority: "Medium",
    },
    {
      id: "9",
      title: "Рефакторинг стора Vuex",
      description: "Разделить основной store на модули",
      category: "Refactor",
      status: "To Do",
      priority: "Medium",
    },
    {
      id: "10",
      title: "E2E тесты корзины",
      description: "Написать Cypress тесты для процесса покупок",
      category: "Test",
      status: "In Progress",
      priority: "High",
    },
  ]);

  const getTask = (id: string) => tasks.find((task) => task.id === id);

  const updateTask = (id: string, values: TaskFormValues) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...values } : task))
    );
  };

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  return (
    <TaskContext.Provider value={{ tasks, getTask, updateTask, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
