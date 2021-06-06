import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
    users: usersReducer
})

export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        }
        if (state.count) nextState.count = state.count
        return nextState
    } else {
        return rootReducer(state, action)
    }
}

export type RootState = ReturnType<typeof rootReducer>
