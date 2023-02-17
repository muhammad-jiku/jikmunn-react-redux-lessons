import { createStore } from 'redux';
import { counterReducer } from '../services/reducers';

export const store = createStore(counterReducer);
