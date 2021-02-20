import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { fetchData } from './components/TasksPlace';

export function RenderDOM() {
  // fetchData()
  console.log('rerendering...');
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
