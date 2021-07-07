import React, { useContext, useState } from 'react';
import { httpHook } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';

const AuthPage = () => {
    const auth = useContext(AuthContext);
    const { loading, request } = httpHook();
    const [form, setForm] = useState({
        emailR: '',
        passwordR: '',
        emailL: '',
        passwordL: '',
    });

    const changeHandler = (event: any): void => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const registerHandler = async () => {
        try {
            const { emailR, passwordR } = form;
            const data = await request('/api/auth/register', 'POST', {
                email: emailR,
                password: passwordR,
            });
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };

    const loginHandler = async () => {
        try {
            const { emailL, passwordL } = form;
            const data = await request('/api/auth/login', 'POST', {
                email: emailL,
                password: passwordL,
            });
            auth.login(data.token, data.userInfo);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <h1>Auth Page</h1>
            <div>
                <h2>Registration</h2>
                <form action="#">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Введите email" name="emailR" onChange={changeHandler} />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Введите password"
                        name="passwordR"
                        onChange={changeHandler}
                    />
                    <button type="submit" onClick={registerHandler} disabled={loading}>
                        зарегистрироваться
                    </button>
                </form>
            </div>
            <hr />
            <div>
                <h2>Login</h2>
                <form action="#">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Введите email" name="emailL" onChange={changeHandler} />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Введите password"
                        name="passwordL"
                        onChange={changeHandler}
                    />
                    <button type="submit" onClick={loginHandler} disabled={loading}>
                        войти
                    </button>
                </form>
            </div>
        </>
    );
};

export default AuthPage;
