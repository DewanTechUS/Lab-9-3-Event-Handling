// src/components/TaskItem/TaskItem.tsx

import React from "react";
import type { TaskItemProps, TaskStatus } from "../../types";

const getStatusLabel = (status: TaskStatus) => {
  switch (status) {
    case "pending":
      return "Pending";
    case "in-progress":
      return "In Progress";
    case "completed":
      return "Completed";
    default:
      return status;
  }
};





export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onStatusChange,
  onDelete,
}) => {
  const isCompleted = task.status === "completed";
  const isHighPriority = task.priority === "high";

  const handleStatusSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onStatusChange(task.id, event.target.value as TaskStatus);
  };

  const dueDateObj = new Date(task.dueDate);
  const today = new Date();
  const isOverdue = !isCompleted && dueDateObj < today;


  //  return // there is diffrent way we can return // see mr bryans video if needed date. video log 12/08/2025 for reference
  


return (
    <li className="task-item">
      <div className="task-item-header">
        <h3 className={isCompleted ? "task-title completed" : "task-title"}>
          {task.title}
        </h3>
        {isHighPriority && (
          <span className="HighPriority-Danger">High Priority</span>
        )}
        {isOverdue && <span className="Overdue-Warning">Overdue</span>}
      </div>

      <p className="task-description">{task.description}</p>

      <div className="task-meta">
        <span className={`status-badge status-${task.status}`}>
          {getStatusLabel(task.status)}
        </span>

        <span className={`priority-badge priority-${task.priority}`}>
          Priority: {task.priority}
        </span>

        <span className="due-date">
          Due: {dueDateObj.toLocaleDateString()}
        </span>
      </div>

      <div className="task-actions">
        <label>
          Status:{" "}
          <select value={task.status} onChange={handleStatusSelectChange}>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </label>

        <button
          type="button"
          className="btn btn-delete"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
