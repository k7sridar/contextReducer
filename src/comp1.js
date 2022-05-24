import React, { useContext } from 'react';
import { userContext } from './app';

const Comp1 = () => {
  const { number, dispatch } = useContext(userContext);
  return (
    <div>
      <span>{number}</span>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>decrement</button>
    </div>
  );
};

export default Comp1;
