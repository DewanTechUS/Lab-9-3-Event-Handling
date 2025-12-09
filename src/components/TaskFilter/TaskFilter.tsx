// src/components/TaskFilter/TaskFilter.tsx
// copied from lesson
// In both tsconfig.node.json and tsconfig.app.json, the setting "verbatimModuleSyntax": true is enabled. If you change it to false, your imports will work without errors. But if you want to keep it set to true, then you must use import type when importing types. 
// // see mr bryans video log 12/08/2025 for reference that video will help you understand more about this topic
import React, { useState } from "react";
import type { TaskFilterProps, TaskStatus } from "../../types";

export const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
  const [status, setStatus] = useState<TaskStatus | undefined>(undefined);
  const [priority, setPriority] = useState<"low" | "medium" | "high" | undefined>(
    undefined
  );

  const handleStatusChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value as TaskStatus | "";
    const nextStatus = value === "" ? undefined : (value as TaskStatus);
    setStatus(nextStatus);
    onFilterChange({
      status: nextStatus,
      priority,
    });
  };

  const handlePriorityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value as "low" | "medium" | "high" | "";
    const nextPriority = value === "" ? undefined : value;
    setPriority(nextPriority);
    onFilterChange({
      status,
      priority: nextPriority,
    });
  };

  return (
    <div className="task-filter">
      <div className="filter-group">
        <label htmlFor="status-filter">Status</label>
        <select
          id="status-filter"
          value={status ?? ""}
          onChange={handleStatusChange}
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="priority-filter">Priority</label>
        <select
          id="priority-filter"
          value={priority ?? ""}
          onChange={handlePriorityChange}
        >
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
};
