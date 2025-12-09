// src/App.tsx
//https://ps-lms.vercel.app/curriculum/se/415/lab-3#:~:text=and%20prop%20handling.-,Instructions,-Setup%20the%20Project
// https://www.youtube.com/results?search_query=npm+create+vite%40latest+task-manager+--+--template+react-ts this is a video link to create task manager using vite and react ts if you need to study..
// but i will follow the lesson instructions
// copied or followed from lesson 
// In both tsconfig.node.json and tsconfig.app.json, the setting "verbatimModuleSyntax": true is enabled. If you change it to false, your imports will work without errors. But if you want to keep it set to true, then you must use import type when importing types. 
// see mr bryans video log 12/08/2025 for reference that video will help you understand more about this topic

import React, { useState } from "react";
import "./App.css";
import type { Task, TaskStatus } from "./types";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { TaskList } from "./components/TaskList/TaskList";

interface TaskFilters {
  status?: TaskStatus;
  priority?: "low" | "medium" | "high";
}

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Task 1",
    description: "Description 1",
    status: "pending",
    priority: "low",
    dueDate: "2025-12-31",
  },
  {
    id: "2",
    title: "Task 2",
    description: "Description 2",
    status: "in-progress",
    priority: "medium",
    dueDate: "2025-01-01",
  },
  {
    id: "3",
    title: "Task 3",
    description: "Description 3",
    status: "completed",
    priority: "high",
    dueDate: "2025-01-02",
  },
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filters, setFilters] = useState<TaskFilters>({});

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleDelete = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const handleFilterChange = (newFilters: TaskFilters) => {
    setFilters(newFilters);
  };

  const filteredTasks = tasks.filter((task) => {
    const statusMatches =
      !filters.status || task.status === filters.status;
    const priorityMatches =
      !filters.priority || task.priority === filters.priority;
    return statusMatches && priorityMatches;
  });

  return (
    <div className="app">
      <h1>Task Manager</h1>

      <TaskFilter onFilterChange={handleFilterChange} />

      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
