import { Task } from "@/interfaces";
import React, { createContext, useState } from "react";

export const TasksContext = createContext({} as TasksContextProps);

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createdTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const updateTask = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isChecked: !task.isChecked } : task,
      ),
    );
  };

  const deleteTask = (taskId: string) => {
    const removeTask = tasks.filter((task) => task.id !== taskId);
    setTasks(removeTask);
  };

  const value = {
    tasks,
    createdTask,
    updateTask,
    deleteTask,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

type TasksProviderProps = {
  children: React.ReactNode;
};

type TasksContextProps = {
  tasks: Task[];
  createdTask: (value: Task) => void;
  updateTask: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
};
