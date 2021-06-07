import { Dispatch } from "react";
import { UsersAction, UsersActionTypes } from '../types/users';
import axios from 'axios';
import { GET_ALL_USERS } from '../../gql';

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            const response = await axios.post(
                'http://localhost:5000/graphql',
                {
                    query: GET_ALL_USERS
                })
                .then((result) => {
                    return result.data;
                });
            dispatch({
                type: UsersActionTypes.FETCH_USERS,
                payload: response.data.getAll
            });
        } catch (e) {
            dispatch({
                type: UsersActionTypes.FETCH_USERS_ERROR,
                payload: `Произошла ошибка при загрузке пользователей. ${e}`
            });
        }
    }
}
