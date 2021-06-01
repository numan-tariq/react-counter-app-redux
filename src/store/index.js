import { createStore } from 'redux';

const initialStates = { counter: 0, isCounter: true };
const reducerFunction = (state = initialStates, action) => {
  if(action.type === 'increment') {
    return {
      counter: state.counter + 1,
      isCounter: state.isCounter,
    };
  }

  if(action.type === 'increase') {
    return {
      counter: state.counter + action.value,
      isCounter: state.isCounter,
    };
  }

  if(action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      isCounter: state.isCounter,
    };
  }

  if(action.type === 'toggle') {
    return {
      isCounter: !state.isCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(reducerFunction);

export default store;