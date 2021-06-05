import {createStore, Store} from 'redux';
import {createWrapper, Context} from 'next-redux-wrapper';
import { reducer } from './reducers';

export interface State {
    tick: string;
}

const makeStore = (context: Context) => createStore(reducer);

export const wrapper = createWrapper<Store<State>>(makeStore, {debug: true});
