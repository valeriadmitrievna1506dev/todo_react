import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { tasksFromData } from '../functions/createTasks';

export default function TasksPlace(props) {
  const [tasksState, setTasksState] = useState();

  useEffect(async () => {
    const apiURL = 'http://localhost:3004/items';
    try {
      const response = await axios.get(apiURL);
      setTasksState(response.data)
    } catch (err) {
      console.log(err.message);
    }
  }, [setTasksState]);


  return (
    <ul id='tasksContent'>
      {tasksFromData(tasksState)}
    </ul>
  );
}
