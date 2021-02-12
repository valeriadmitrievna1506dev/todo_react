import React from "react";

export default function AddTaskForm() {
  return (
    <form id="addTaskForm">
      <input type="text" name="tacskinput" id="tacskinput" />
      <button type="submit">add</button>
    </form>
  );
}
