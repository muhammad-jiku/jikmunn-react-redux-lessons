//  external import
import { createStore } from 'redux';

//  internal import
import { counterReducer } from '../services/reducers';

export const store = createStore(counterReducer);
