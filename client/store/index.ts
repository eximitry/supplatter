import { AnyAction, applyMiddleware, createStore, } from 'redux';
import { createWrapper, Context } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import { reducer, RootState } from './reducers';
import { ThunkDispatch } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const makeStore = (context: Context) => createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper(makeStore, { debug: true });

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>
