import { RenderDOM } from '../RenderDOM';

let state = {
  tasks: [
    {
      id: 0,
      text: 'сделать что-нибудь полезное',
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

export const addTask = (event) => {
  event.preventDefault();
  if (event.currentTarget.querySelector('#tacskinput').value) {
    let newTask = {
      id:
        state.tasks.length > 0
          ? state.tasks.reduce((acc, curr) => (acc.id > curr.id ? acc : curr))
              .id + 1
          : 0,
      text: event.currentTarget.querySelector('#tacskinput').value,
      completed: false,
    };
    state.tasks.push(newTask);
    event.currentTarget.querySelector('#tacskinput').value = '';
    RenderDOM(state);
  }
};

export const editTaskText = (target, textE) => {
  let editingTask = state.tasks.find(task => {
    return task.id === parseInt(target.parentNode.getAttribute('data-id'))
  })
  editingTask.text = textE
  RenderDOM(state);
};

export default state;
