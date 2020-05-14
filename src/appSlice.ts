/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import slices from "./app/constants/slices";
import { RootState } from "./app/store";

interface AppState {
    loading: boolean;
}

const initialAppState: AppState = {
    loading: false,
};

const appSlice = createSlice({
    name: slices.APP,
    initialState: initialAppState,
    reducers: {},
    extraReducers: {},
});

export const selectInitialState = (state: RootState) => {
    return state.app;
};

export default appSlice.reducer;
