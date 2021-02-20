import React from 'react';
import { tasksFromData } from '../functions/createTasks';

export default function TasksPlace(props) {
  return (
    <ul id='tasksContent'>
      {tasksFromData(props.data.tasks)}
    </ul>
  );
}
