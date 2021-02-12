import React from "react";
import { addTask } from "../data/state";

export default function AddTaskForm() {
  return (
    <form onSubmit={addTask} id="addTaskForm">
      <input autoComplete="off" type="text" name="tacskinput" id="tacskinput" />
      <button type="submit">add</button>
    </form>
  );
}
