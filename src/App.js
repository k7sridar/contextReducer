import React, { createContext, useReducer } from 'react';
import Comp1 from './comp1';

function reducerfn(state, action) {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      number: state.number + 1,
    };
  }
  if (action.type === 'DECREMENT') {
    return {
      ...state,
      number: state.number - 1,
    };
  }
  return state;
}

export const userContext = createContext();

const App = () => {
  const initialValue = {
    number: 0,
  };
  const [state, dispatch] = useReducer(reducerfn, initialValue);
  console.log(state);
  console.log(dispatch);

  return (
    <>
      <userContext.Provider
        value={{
          number: state.number,
          dispatch,
        }}
      >
        <Comp1 />
      </userContext.Provider>
    </>
  );
};

export default App;
