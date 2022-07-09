import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import { filterValuepropsType } from "../App";
import { Button } from "./Button";
import { Input } from "./Input";

type stateTasksPropstype = {
  id: string;
  nameTask: string;
  isDone: boolean;
};

type TaskListPropsType = {
  filteredTasks: stateTasksPropstype[];
  title: string;
  removeTask: (id: string) => void;
  setFilterValue: (value: filterValuepropsType) => void;
  addTask: (value: string) => void;
};

export const TaskList = (props: TaskListPropsType) => {
  let displayTasks = props.filteredTasks.map((el) => {
    const removeTaskHandler = (id: string) => {
      props.removeTask(id);
    };

    return (
      <li key={el.id}>
        <Button
          titleName="✖️"
          callBackFunction={() => removeTaskHandler(el.id)}
        />
        <Input type={"checkbox"} checked={el.isDone} />
        {el.nameTask}
      </li>
    );
  });

  const [valueInput, setValueInput] = useState("");

  const titleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.currentTarget.value);
  };

  const addTaskHandler = (valueInput: string) => {
    if (valueInput === "".trim()) {
    } else {
      props.addTask(valueInput);
      setValueInput("");
    }
  };

  const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTaskHandler(valueInput);
    }
  };

  return (
    <div className="taskList">
      <h2>{props.title}</h2>
      <Input
        value={valueInput}
        onChange={titleInput}
        onKeyUp={keyPressHandler}
      />
      <Button
        titleName="Add"
        callBackFunction={() => addTaskHandler(valueInput)}
      />
      <ul> {displayTasks} </ul>
      <Button
        titleName="All"
        callBackFunction={() => props.setFilterValue("all")}
      />
      <Button
        titleName="Active"
        callBackFunction={() => props.setFilterValue("active")}
      />
      <Button
        titleName="Completed"
        callBackFunction={() => props.setFilterValue("completed")}
      />
    </div>
  );
};
