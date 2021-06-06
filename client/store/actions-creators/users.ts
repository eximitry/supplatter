import { Dispatch } from "react";
import { UsersAction, UsersActionTypes } from '../types/users';
import axios from 'axios';

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            const response = await axios.get('https://reqres.in/api/products')
            dispatch({
                type: UsersActionTypes.FETCH_USERS,
                payload: response.data
            });
            // const { data } = useQuery(GET_ALL_USERS);
            // console.log(data);
            // dispatch({
            //     type: UsersActionTypes.FETCH_USERS,
            //     payload: data.getAll
            // });
        } catch (e) {
            dispatch({
                type: UsersActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            });
        }
    }
}
