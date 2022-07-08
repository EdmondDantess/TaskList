import React, { useState } from "react";

type stateTasksPropstype = {
  id: number;
  nameTask: string;
  isDone: boolean;
};

type TaskListPropsType = {
  stateTasks: stateTasksPropstype[];
  title: string;
  setStateTasks: (value: stateTasksPropstype[]) => void;
  removeTask: (id: number) => void;
};

export const TaskList = (props: TaskListPropsType) => {
  const [listTasks, setListTasks] = useState(props.stateTasks);

  const removeTaskHandler = (id: number) => {
    props.removeTask(id);
    setListTasks(props.stateTasks)
  };

  let displayTasks = listTasks.map((el) => {
    return (
      <li key={el.id}>
        <button onClick={() => removeTaskHandler(el.id)}>x</button>
        <input type="checkbox" checked={el.isDone} />
        {el.nameTask}
      </li>
    );
  });

  const filterHandler = (value: string) => {
    if (value === "active") {
      setListTasks(props.stateTasks.filter((el) => !el.isDone));
    }
    if (value === "completed") {
      setListTasks(props.stateTasks.filter((el) => el.isDone));
    }
    if (value === "all") {
      setListTasks(props.stateTasks);
    }
  };

  return (
    <div className="taskList">
      <h2>{props.title}</h2>
      <input placeholder="enter what you need to do" /> <button>add</button>
      <ul> {displayTasks} </ul>
      <button onClick={() => filterHandler("all")}>All</button>
      <button onClick={() => filterHandler("active")}>Active</button>
      <button onClick={() => filterHandler("completed")}>Completed</button>
    </div>
  );
};
