import { createContext } from 'react';

export const AuthContext = createContext({
    token: null,
    userInfo: null,
    // eslint-disable-next-line no-unused-vars
    login: (token: string, userId: string) => {},
    logout: () => {},
    isAuthenticated: false,
});
