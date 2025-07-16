import { create } from "zustand";
import type { TaskState } from "../types/models";
import { persist } from "zustand/middleware";

export const useTasksStore = create<TaskState>()(
  persist(
    (set, get) => ({
      tasks: [
        {
          id: "1",
          title: "Исправить кнопку отправки",
          description: "Кнопка не реагирует на клики в мобильной версии",
          category: "Bug",
          status: "To Do",
          priority: "High",
          dateOfCreation: new Date(2025, 7, 8),
        },
        {
          id: "2",
          title: "Добавить темную тему",
          description: "Реализовать переключение между светлой и темной темой",
          category: "Feature",
          status: "In Progress",
          priority: "Medium",
          dateOfCreation: new Date(2025, 7, 8),
        },
        {
          id: "3",
          title: "Обновить документацию API",
          description: "Добавить новые endpoint в документацию Swagger",
          category: "Documentation",
          status: "Done",
          priority: "Low",
          dateOfCreation: new Date(2025, 7, 8),
        },
        {
          id: "4",
          title: "Оптимизировать загрузку изображений",
          description: "Реализовать lazy loading для галереи",
          category: "Refactor",
          status: "In Progress",
          priority: "High",
          dateOfCreation: new Date(2025, 7, 8),
        },
        {
          id: "5",
          title: "Написать тесты для модуля авторизации",
          description: "Покрыть Jest-тестами все сценарии входа",
          category: "Test",
          status: "To Do",
          priority: "Medium",
          dateOfCreation: new Date(2025, 7, 8),
        },
        {
          id: "6",
          title: "Починить пагинацию",
          description: "Страница пагинации ломается при >100 элементах",
          category: "Bug",
          status: "To Do",
          priority: "High",
          dateOfCreation: new Date(2025, 7, 8),
        },
        {
          id: "7",
          title: "Виджет погоды",
          description: "Добавить виджет с прогнозом погоды на дашборд",
          category: "Feature",
          status: "In Progress",
          priority: "Low",
          dateOfCreation: new Date(2025, 7, 8),
        },
        {
          id: "8",
          title: "Руководство для новых разработчиков",
          description: "Создать инструкцию по настройке окружения",
          category: "Documentation",
          status: "Done",
          priority: "Medium",
          dateOfCreation: new Date(2025, 7, 8),
        },
        {
          id: "9",
          title: "Рефакторинг стора Vuex",
          description: "Разделить основной store на модули",
          category: "Refactor",
          status: "To Do",
          priority: "Medium",
          dateOfCreation: new Date(2025, 7, 8),
        },
        {
          id: "10",
          title: "E2E тесты корзины",
          description: "Написать Cypress тесты для процесса покупок",
          category: "Test",
          status: "In Progress",
          priority: "High",
          dateOfCreation: new Date(2025, 7, 8),
        },
      ],

      filters: {
        statuses: [],
        categories: [],
        priorities: [],
      },

      getTask: (id: string) => get().tasks.find((task) => task.id === id),

      updateTask: (id, values) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...values } : task
          ),
        }));
      },

      createTask: (task) => {
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              ...task,
              id: String(Number(state.tasks[state.tasks.length - 1].id) + 1),
              dateOfCreation: new Date(),
            },
          ],
        }));
      },

      deleteTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }));
      },

      setFilters: (values, type) => {
        set((state) => ({ filters: { ...state.filters, [type]: values } }));
      },

      resetFilters: () => {
        set(() => ({
          filters: {
            statuses: [],
            categories: [],
            priorities: [],
          },
        }));
      },
    }),
    {
      name: "tasks",
      partialize: (state) => ({ tasks: state.tasks }),
    }
  )
);
