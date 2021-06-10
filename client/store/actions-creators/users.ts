import { Dispatch } from 'react';
import { UsersAction, UsersActionTypes } from '../types/users';
import axios from 'axios';

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            const response = await axios.get('http://localhost:5000/users')
            dispatch({
                type: UsersActionTypes.FETCH_USERS,
                payload: response.data
            });
        } catch (e) {
            dispatch({
                type: UsersActionTypes.FETCH_USERS_ERROR,
                payload: `Произошла ошибка при загрузке пользователей. ${e}`
            });
        }
    }
}
