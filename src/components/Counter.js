import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index'

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const isAvailabeCounter = useSelector(state => state.isCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // Payload = 5
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
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
