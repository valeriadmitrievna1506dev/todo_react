import { RenderDOM } from '../RenderDOM';
import instance from '../axios';

export const makeTaskCompleted = (event) => {
  // state.tasks.find(
  //   (task) =>
  //     task.id ===
  //     parseInt(event.currentTarget.parentNode.getAttribute('data-id'))
  // ).completed = !state.tasks.find(
  //   (task) =>
  //     task.id ===
  //     parseInt(event.currentTarget.parentNode.getAttribute('data-id'))
  // ).completed;
  RenderDOM();
};

export const deleteTask = async (event) => {
  const deletedID = parseInt(
    event.currentTarget.parentNode.getAttribute('data-id')
  );
  try {
    const response = await instance.delete(`/items/${deletedID}`);
    RenderDOM();
  } catch (err) {
    console.log(err.message);
  }
};

export const addTask = (event) => {
  event.preventDefault();
  // if (event.currentTarget.querySelector('#tacskinput').value) {
  //   let newTask = {
  //     id:
  //       state.tasks.length > 0
  //         ? state.tasks.reduce((acc, curr) => (acc.id > curr.id ? acc : curr))
  //             .id + 1
  //         : 0,
  //     text: event.currentTarget.querySelector('#tacskinput').value,
  //     completed: false,
  //   };
  //   state.tasks.push(newTask);
  //   event.currentTarget.querySelector('#tacskinput').value = '';
    RenderDOM();
};

export const editTaskText = (target, textE) => {
  // let editingTask = state.tasks.find((task) => {
  //   return task.id === parseInt(target.parentNode.getAttribute('data-id'));
  // });
  // editingTask.text = textE;
  RenderDOM();
};

