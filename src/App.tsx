import React, { useState } from "react";
import "./App.css";
import { TaskList } from "./TaskList";

type stateTasksPropstype = {
  id: number;
  nameTask: string;
  isDone: boolean;
};
export type stateTasksPropsArrayType = {
  stateTasks: stateTasksPropstype[];
  setStateTasks: () => void;
};

function App() {
  const [stateTasks, setStateTasks] = useState<stateTasksPropstype[]>([
    { id: 1, nameTask: "Learn Eng", isDone: false },
    { id: 2, nameTask: "Learn React", isDone: false },
    { id: 3, nameTask: "Learn CSS", isDone: true },
    { id: 4, nameTask: "Practice CodeWars", isDone: true },
    { id: 5, nameTask: "Watch Twitch", isDone: false },
    { id: 6, nameTask: "Drive to fishing", isDone: true },
  ]);

  const removeTask = (id: number) => {
    setStateTasks(stateTasks.filter((el) => el.id != id));
  };

  return (
    <div className="app">
      <TaskList
        stateTasks={stateTasks}
        setStateTasks={setStateTasks}
        title="first Task"
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
