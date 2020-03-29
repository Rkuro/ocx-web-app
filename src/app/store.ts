import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import navReducer from '../components/nav/navSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    nav: navReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
