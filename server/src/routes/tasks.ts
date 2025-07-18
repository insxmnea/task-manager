import { Router, Request, Response } from "express";
import { Task } from "../models/task";

const router = Router();
let tasks: Task[] = [
  {
    id: "1",
    title: "Исправить кнопку отправки",
    description: "Кнопка не реагирует на клики в мобильной версии",
    category: "Bug",
    status: "To Do",
    priority: "High",
    dateOfCreation: new Date(),
  },
  {
    id: "2",
    title: "Добавить темную тему",
    description: "Реализовать переключение между светлой и темной темой",
    category: "Feature",
    status: "In Progress",
    priority: "Medium",
    dateOfCreation: new Date(),
  },
  {
    id: "3",
    title: "Обновить документацию API",
    description: "Добавить новые endpoint в документацию Swagger",
    category: "Documentation",
    status: "Done",
    priority: "Low",
    dateOfCreation: new Date(),
  },
  {
    id: "4",
    title: "Оптимизировать загрузку изображений",
    description: "Реализовать lazy loading для галереи",
    category: "Refactor",
    status: "In Progress",
    priority: "High",
    dateOfCreation: new Date(),
  },
  {
    id: "5",
    title: "Написать тесты для модуля авторизации",
    description: "Покрыть Jest-тестами все сценарии входа",
    category: "Test",
    status: "To Do",
    priority: "Medium",
    dateOfCreation: new Date(),
  },
  {
    id: "6",
    title: "Починить пагинацию",
    description: "Страница пагинации ломается при >100 элементах",
    category: "Bug",
    status: "To Do",
    priority: "High",
    dateOfCreation: new Date(),
  },
  {
    id: "7",
    title: "Виджет погоды",
    description: "Добавить виджет с прогнозом погоды на дашборд",
    category: "Feature",
    status: "In Progress",
    priority: "Low",
    dateOfCreation: new Date(),
  },
  {
    id: "8",
    title: "Руководство для новых разработчиков",
    description: "Создать инструкцию по настройке окружения",
    category: "Documentation",
    status: "Done",
    priority: "Medium",
    dateOfCreation: new Date(),
  },
  {
    id: "9",
    title: "Рефакторинг стора Vuex",
    description: "Разделить основной store на модули",
    category: "Refactor",
    status: "To Do",
    priority: "Medium",
    dateOfCreation: new Date(),
  },
  {
    id: "10",
    title: "E2E тесты корзины",
    description: "Написать Cypress тесты для процесса покупок",
    category: "Test",
    status: "In Progress",
    priority: "High",
    dateOfCreation: new Date(),
  },
];

router.post("/", (req: Request, res: Response) => {
  const task: Task = {
    id: String(tasks.length + 1),
    dateOfCreation: new Date(),
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    priority: req.body.priority,
    status: req.body.status,
  };

  tasks.push(task);
  res.status(201).json(task);
});

router.get("/", (req: Request, res: Response) => {
  res.json(tasks);
});

router.get("/:id", (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === req.params.id);

  if (!task) {
    res.status(404).send("Task not found");
  } else {
    res.json(task);
  }
});

router.put("/:id", (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === req.params.id);

  if (!task) {
    res.status(404).send("Task not found");
  } else {
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.category = req.body.category || task.category;
    task.priority = req.body.priority || task.priority;
    task.status = req.body.status || task.status;

    res.json(task);
  }
});

router.delete("/:id", (req: Request, res: Response) => {
  const index = tasks.findIndex((t) => t.id == req.params.id);

  if (index === -1) {
    res.status(404).send("Task not found");
  } else {
    tasks.splice(index, 1);
    res.status(204).send();
  }
});

export default router;
