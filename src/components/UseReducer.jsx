import React from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  return (
    <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  )
}
export default UseReducer
