export interface IUser {
    _id: string;
    username: string;
    email: string
    password: string
    avatar: string
}

export interface UsersState {
    users: IUser[];
    error: string;
}

export enum UsersActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersAction {
    type: UsersActionTypes.FETCH_USERS;
    payload: IUser[]
}

interface FetchUsersErrorAction {
    type: UsersActionTypes.FETCH_USERS_ERROR;
    payload: string
}

export type UsersAction = FetchUsersAction | FetchUsersErrorAction
