import React, { useState } from "react";
import { v1 } from "uuid";
import "./App.css";
import { TaskList } from "./components/TaskList";

type stateTasksPropstype = {
  id: string;
  nameTask: string;
  isDone: boolean;
};
export type stateTasksPropsArrayType = {
  stateTasks: stateTasksPropstype[];
  setStateTasks: () => void;
};
export type filterValuepropsType =  "all" | "completed" | "active"


function App() {

  const [stateTasks, setStateTasks] = useState<stateTasksPropstype[]>([
    { id: v1(), nameTask: "Learn Eng", isDone: false },
    { id: v1(), nameTask: "Learn React", isDone: false },
    { id: v1(), nameTask: "Learn CSS", isDone: true },
    { id: v1(), nameTask: "Practice CodeWars", isDone: true },
    { id: v1(), nameTask: "Watch Twitch", isDone: false },
    { id: v1(), nameTask: "Drive to fishing", isDone: true },
  ]);

  const addTask = (title: string) => {
    let newTask = {id: v1() , nameTask: title, isDone: false}  
    setStateTasks([newTask, ...stateTasks]) 
  }

  const removeTask = (id: string) => {
    setStateTasks(stateTasks.filter((el) => el.id !== id));
  };

  const [filterValue, setFilterValue] = useState<filterValuepropsType>("all");

  let filteredTasks = stateTasks;

  if (filterValue === "active") {
    filteredTasks = stateTasks.filter((el) => !el.isDone);
  }
  if (filterValue === "completed") {
    filteredTasks = stateTasks.filter((el) => el.isDone);
  }

  return (
    <div className="app">
      <TaskList
      addTask={addTask}
        setFilterValue={setFilterValue}
        filteredTasks={filteredTasks}
        title="first Task"
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
