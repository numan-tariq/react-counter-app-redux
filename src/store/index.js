import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialState = { counter: 0, isCounter: true };

const sliceCounter = createSlice({
  name: 'counterSlicer',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.isCounter = !state.isCounter;
    },
  }
});

const store = configureStore({
  reducer: sliceCounter.reducer
});

export const counterActions = sliceCounter.actions;

export default store;