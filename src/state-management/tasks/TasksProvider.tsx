import { ReactNode, useReducer } from "react";
import TaskContext from "./tasksContext";

import { Task } from "./TaskList";

interface AddTask {
  type: "ADD";
  task: Task;
}

interface RemoveTask {
  type: "REMOVE";
  taskId: number;
}

export type TaskAction = AddTask | RemoveTask;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "REMOVE":
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TasksProvider;
