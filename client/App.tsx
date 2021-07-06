import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';

const App = () => {
    const { login, logout, token, userId } = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);
    return (
        <AuthContext.Provider value={
            { login, logout, token, userId, isAuthenticated }
        }>
            <BrowserRouter>
                {routes}
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default App;
