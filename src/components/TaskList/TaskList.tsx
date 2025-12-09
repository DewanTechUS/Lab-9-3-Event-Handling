// src/components/TaskList/TaskList.tsx
import React from "react";
import type { TaskListProps } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onStatusChange,
  onDelete,
}) => {
  if (tasks.length === 0) {
    return (
      <div className="task-list empty">
        <p>Nothing to show here.</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id} 
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
