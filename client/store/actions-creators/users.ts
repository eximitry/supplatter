import { Dispatch } from "react";
import axios from "axios";
import { UsersAction, UsersActionTypes } from '../types/users';
import { GRAPHQL_API } from '../../constants';
import { GET_ALL_USERS } from '../../gql';

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            const response = await axios.post(
                GRAPHQL_API, {
                    query: GET_ALL_USERS
                }
            );
            dispatch({
                type: UsersActionTypes.FETCH_USERS,
                payload: response.data
            });
        } catch (e) {
            dispatch({
                type: UsersActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            });
        }
    }
}
