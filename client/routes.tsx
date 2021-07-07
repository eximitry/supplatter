import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import TasksPage from './pages/TasksPage';
import PlanningPage from './pages/PlanningPage';
import ProfilePage from './pages/ProfilePage';
import TrackerPage from './pages/TrackerPage';

export const useRoutes = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/tasks" exact component={TasksPage} />
                <Route path="/planning" exact component={PlanningPage} />
                <Route path="/profile" exact component={ProfilePage} />
                <Route path="/tracker" exact component={TrackerPage} />
                <Redirect to="/profile" />
            </Switch>
        );
    }

    return (
        <Switch>
            <Route path="/auth" exact component={AuthPage} />
            <Redirect to="/auth" />
        </Switch>
    );
};
