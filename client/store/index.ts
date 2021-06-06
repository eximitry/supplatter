import { AnyAction, applyMiddleware, createStore, Store } from 'redux';
import { createWrapper, Context, MakeStore } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import { bindMiddleware, reducer, rootReducer, RootState } from './reducers';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';

const initStore = () => {
    return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

// const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper(initStore);

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>
