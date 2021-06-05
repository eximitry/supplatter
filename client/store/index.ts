import { AnyAction, applyMiddleware, createStore } from 'redux';
import { createWrapper, Context, MakeStore } from 'next-redux-wrapper';
import { reducer, RootState } from './reducers';
import thunk, { ThunkDispatch } from 'redux-thunk';

const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<RootState>(makeStore, { debug: true });

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>
