import { useState, useCallback, useEffect } from 'react';

const storageName = 'userData';

export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [ready, setReady] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    const login = useCallback((jwtToken, userInfo) => {
        setToken(jwtToken);
        setUserInfo(userInfo);

        localStorage.setItem(
            storageName,
            JSON.stringify({
                userInfo: userInfo,
                token: jwtToken,
            }),
        );
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserInfo(null);
        localStorage.removeItem(storageName);
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName) as any);

        if (data && data.token) {
            login(data.token, data.userInfo);
        }
        setReady(true);
    }, [login]);

    return { login, logout, token, userInfo, ready };
};
