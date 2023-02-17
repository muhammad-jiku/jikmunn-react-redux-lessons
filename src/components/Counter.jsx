import React from 'react';

//  external imports
import { useDispatch, useSelector } from 'react-redux';

//  internal imports
import {
  incrementCount,
  decrementCount,
  resetCount,
} from '../services/actions';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrementCount = () => {
    dispatch(incrementCount());
  };
  const handleDecrementCount = () => {
    dispatch(decrementCount());
  };
  const handleResetCount = () => {
    dispatch(resetCount());
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrementCount}>Increment</button>
      <button onClick={handleDecrementCount}>Decrement</button>
      <button onClick={handleResetCount}>Reset</button>
    </div>
  );
};

export default Counter;
