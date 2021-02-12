import { RenderDOM } from '../RenderDOM';

let state = {
  tasks: [
    {
      id: 0,
      text: 'сделать что-нибудь полезное с кодом',
      completed: false,
    },
    {
      id: 1,
      text: 'закончить рабочую неделю',
      completed: false,
    },
    {
      id: 2,
      text: 'попить кофе',
      completed: false,
    },
    {
      id: 3,
      text: 'пройти стажировку',
      completed: false,
    },
  ],
};

export const makeTaskCompleted = (event) => {
  state.tasks.find(
    (task) =>
      task.id ===
      parseInt(event.currentTarget.parentNode.getAttribute('data-id'))
  ).completed = !state.tasks.find(
    (task) =>
      task.id ===
      parseInt(event.currentTarget.parentNode.getAttribute('data-id'))
  ).completed;
  RenderDOM(state);
};

export const deleteTask = (event) => {
  state.tasks.splice(
    state.tasks.indexOf(
      state.tasks.find(
        (task) =>
          task.id ===
          parseInt(event.currentTarget.parentNode.getAttribute('data-id'))
      )
    ),
    1
  );
  RenderDOM(state);
};

export default state;
