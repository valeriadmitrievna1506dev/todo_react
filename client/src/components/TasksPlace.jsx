import React, { useState, useEffect } from 'react';
import { tasksFromData } from '../functions/createTasks';
import { deleteTask } from '../data/state';
import instance from '../axios';

export default function TasksPlace() {
  const [tasksState, setTasksState] = useState();

  async function fetchData() {
    try {
      const response = await instance.get('/items');
      if (response.statusText === 'OK') {
        const tasksData = await response.data;
        console.log(tasksData);
        setTasksState(tasksData);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetchData(setTasksState);
  }, [deleteTask]);

  return <ul id='tasksContent'>{tasksFromData(tasksState)}</ul>;
}
