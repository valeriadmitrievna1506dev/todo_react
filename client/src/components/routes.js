import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './AuthPage';
import TaskPage from './TaskPage';

export const useRoutes = (isAuthenticated, state) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path='/items'>
          <TaskPage data={state} />
        </Route>
        <Redirect to='/items' />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path='/' exact>
        <AuthPage />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
};
