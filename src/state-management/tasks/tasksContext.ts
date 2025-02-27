import { Dispatch } from "react";
import { Task } from "./TaskList";
import React from "react";
import { TaskAction } from "./TasksProvider";

interface TaskContext {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TaskContext = React.createContext<TaskContext>({} as TaskContext);

export default TaskContext;
