import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import TasksPage from './pages/TasksPage';

export const useRoutes = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/" exact component={TasksPage}/>
                <Redirect to="/"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/auth" exact component={AuthPage}/>
            <Redirect to="/auth"/>
        </Switch>
    )
};
