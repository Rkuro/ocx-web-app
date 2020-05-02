/**
 * Redux store initialization with set reducers, bootstrapped using @reduxjs/toolkit
 * Read more here:
 */
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import navReducer from "../components/nav/navSlice";
import greetingReducer from "../components/greeting-text/greetingSlice";
import authReducer from "../pages/auth/authSlice";
import appReducer from "../appSlice";

export const store = configureStore({
    reducer: {
        nav: navReducer,
        greeting: greetingReducer,
        auth: authReducer,
        app: appReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
