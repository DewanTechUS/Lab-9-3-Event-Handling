//https://ps-lms.vercel.app/curriculum/se/415/lab-3#:~:text=and%20prop%20handling.-,Instructions,-Setup%20the%20Project
// https://www.youtube.com/results?search_query=npm+create+vite%40latest+task-manager+--+--template+react-ts this is a video link to create task manager using vite and react ts if you need to study..
// but i will follow the lesson instructions
// src/types/index.ts
// copied from lesson 
// status type for a task
// defining the structure of a task object
export type TaskStatus = "pending" | "in-progress" | "completed";
//task interface
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: "low" | "medium" | "high";
  dueDate: string;
}
// props for task list component
export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}
// props for individual task item component
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}
// props for task filter component
export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }) => void;
}
// notes updated