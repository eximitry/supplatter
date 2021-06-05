import { UsersAction, UsersActionTypes, UsersState } from '../types/users';

const initialState: UsersState = {
    users: [],
    error: ''
}

export const usersReducer = (state = initialState, action: UsersAction): UsersState => {
    switch (action.type) {
        case UsersActionTypes.FETCH_USERS_ERROR:
            return { ...state, error: action.payload };
        case UsersActionTypes.FETCH_USERS:
            return { error: '', users: action.payload };
        default:
            return state;
    }
}
