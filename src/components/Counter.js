import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const isAvailabeCounter = useSelector(state => state.isCounter);

  const incrementHandler = () => {
    dispatch({ type : 'increment' });
  };

  const increaseHandler = () => {
    dispatch({ 
      type: 'increase',
      value: 5,
   });
  };

  const decrementHandler = () => {
    dispatch({ type : 'decrement' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isAvailabeCounter && <div className={classes.value}>{ counter }</div>}
      <div>
        <button onClick = { incrementHandler }>Increment</button>
        <button onClick = { increaseHandler }>Increment by 5</button>
        <button onClick = { decrementHandler }>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
