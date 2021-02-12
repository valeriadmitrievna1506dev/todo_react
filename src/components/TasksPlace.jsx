import React from "react";
import { tasksFromData } from "../functions/createTask";


export default function TasksPlace(props) {
  console.log(props.tasks);
  return <ul id="tasksContent">{tasksFromData(props.tasks)}</ul>;
}
