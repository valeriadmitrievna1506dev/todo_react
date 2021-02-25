import { useState, useEffect } from 'react';
import AddTaskForm from './AddTaskForm';
import TasksPlace from './TasksPlace';
import BottomPanel from './BottomPanel';
import {
  AddTask,
  DeleteTask,
  editTaskText,
  fetchData,
  PutDoneTask,
} from './../fetchData';
import React from 'react';

export default function TasksPage() {
  const [data, setData] = useState();
  const [filters, setFilters] = useState({
    order: 'normal',
    done: 'all',
  });

  const updateFilters = (order, completeness) => {
    setFilters({
      order: order,
      done: completeness,
    });
  };

  const callAddTask = async (taskText) => {
    await AddTask(taskText);
    setData(await fetchData(filters.order, filters.done));
  };

  const callEditTask = async (e, text) => {
    const id = e.currentTarget.parentElement.getAttribute('data-id');
    await editTaskText(id, text);
    setData(await fetchData(filters.order, filters.done));
  };

  const callTaskDone = async (e) => {
    const id = e.currentTarget.parentElement.getAttribute('data-id');
    const value = e.currentTarget.parentElement.classList.value ? true : false;
    await PutDoneTask(id, !value);
    setData(await fetchData(filters.order, filters.done));
  };

  const callDeleteTask = async (e) => {
    const id = e.currentTarget.parentElement.getAttribute('data-id');
    await DeleteTask(id);
    setData(await fetchData(filters.order, filters.done));
  };

  useEffect(async () => {
    setData(await fetchData(filters.order, filters.done));
  }, [filters]);

  return (
    <div>
      <AddTaskForm addTask={callAddTask} />
      <TasksPlace
        data={data}
        deleteTask={callDeleteTask}
        doneTask={callTaskDone}
        editText={callEditTask}
      />
      <BottomPanel updateFilters={updateFilters} />
    </div>
  );
}
