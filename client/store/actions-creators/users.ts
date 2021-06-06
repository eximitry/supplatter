import { Dispatch } from "react";
import { UsersAction, UsersActionTypes } from '../types/users';
import axios from 'axios';

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            const response = await axios({
                url: 'http://localhost:5000/graphql',
                method: 'post',
                data: {
                    query: `
                        query {
                            getAll {
                                _id
                                username
                                email
                                password
                            }
                        }
                    `
                }
            }).then((result) => {
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
