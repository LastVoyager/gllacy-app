import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialGoodsState = { goods: [],};

const counterSlice = createSlice({
  name: 'goods',
  initialState: initialGoodsState,
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
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;