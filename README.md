# Lab 9.3 - Event Handling (Lab 3: Lists, Keys, and Conditionals)
## Author  
**Dewan Mahmud (Rocky)**  
Per Scholas Software Engineering 2025-RTT-57  

This is my Lab 3 assignment for Per Scholas SE/415. In this project, I built a Task Manager application using React and TypeScript, focusing on list rendering, keys, conditional rendering, and component composition.

## This project helped me understand how React updates the UI and how TypeScript improves structure and maintainability.

## What This Project Does

The Task Manager includes the following features:
- Rendering tasks with unique keys  
- Filtering by status and priority  
- Updating a task’s status  
- Deleting tasks  
- Conditional UI elements such as:
  - Line-through for completed tasks  
  - A high priority badge  
  - An overdue badge  
  - Color-coded indicators for status and priority  

The design is organized and structured clearly.
## Technologies Used
- React  
- TypeScript  
- Vite  
- CSS  

## How to run
1. Start the development server in the terminal:
-  npm run dev
2. Vite will generate a local server URL such as:
-  http://localhost:5173

## Helpful Study Resources
If we want to learn how to create a React and TypeScript project using Vite, these videos will be useful:
- https://www.youtube.com/results?search_query=npm+create+vite%40latest+task-manager+--+--template+react-ts  
- https://www.youtube.com/watch?v=BdCCpAICXVc  

# Reflection Questions
1.	How did I ensure unique keys
I used each task’s id property when rendering with map. This prevents React from mismanaging component updates.
2.	What did I consider when implementing filtering
I made filters optional. Tasks remain visible unless a filter is explicitly applied.
Example condition:
!filters.status || task.status === filters.status
3.	How did I handle updating task status
I used the following pattern:
setTasks(prev =>
prev.map(task =>
task.id === taskId ? { ...task, status: newStatus } : task
)
)
4.	Challenges with conditional rendering
The main challenge was comparing due dates to determine overdue tasks and ensuring badges appear only when necessary. After testing, the logic functioned correctly.

## Note
This was my second attempt, and I am glad I revisited the assignment because the concepts became much clearer. Rebuilding the project helped reinforce my understanding of React and TypeScript, and completing it twice increased my confidence in building structured React applications.

Throughout this process, I gained a stronger understanding of:

- How React handles dynamic lists  
- Why keys are important when mapping items  
- How conditional rendering works inside components  
- How props move between parent and child components  
- How TypeScript interfaces help organize data and prevent errors  
- How to troubleshoot TypeScript import issues related to the `verbatimModuleSyntax` setting  

### Troubleshooting Note 

I spent about 30 minutes figuring out what was causing the issue and how to fix it.

Both `tsconfig.node.json` and `tsconfig.app.json` include the setting:
1. "verbatimModuleSyntax": true
- When it is true, you must use (import type)
2. "verbatimModuleSyntax": false
- When it is false, you can use normal (imports)

## Special Thanks
- A special thanks to my amazing teachers, Tishana Trainor and Bryan Santos. Mr. Bryan’s 12/08/2025 video really helped me understand why TypeScript gives errors with incorrect type imports and how import type solves the problem.




