import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import MainWrapper from './layouts/MainWrapper';

const App = () => {
    const { login, logout, token, userInfo } = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);
    return (
        <AuthContext.Provider value={{ login, logout, token, userInfo, isAuthenticated }}>
            <BrowserRouter>
                <MainWrapper>{routes}</MainWrapper>
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default App;
