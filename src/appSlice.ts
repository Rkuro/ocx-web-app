import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { reAuthenticate } from "./app/api/index";
import slices from "./app/constants/slices";
import { RootState } from "./app/store";
import LOADING_STATES from "./app/constants/loading";

const initialAppState = {
    appState: {
        user: {},
        token: "",
    },
    loading: "idle",
};

export const reAuthenticateThunk = createAsyncThunk<any, undefined>(
    "user/reauthenticate",
    async (arg, thunkApi) => {
        console.log("arg", arg);
        console.log("thunkApi", thunkApi);
        const response = await reAuthenticate();
        console.log("response:", response);
        return response.data;
    }
);

const appSlice = createSlice({
    name: slices.APP,
    initialState: initialAppState,
    reducers: {},
    extraReducers: {
        [reAuthenticateThunk.fulfilled as any]: (state, action) => {
            console.log("Authenticate reducer fulfilled,", state, action);
            state.loading = LOADING_STATES.fulfilled;
        },
        [reAuthenticateThunk.rejected as any]: (state, action) => {
            console.log("Authenticate reducer rejected,", state, action);
            state.loading = LOADING_STATES.error;
        },
        [reAuthenticateThunk.pending as any]: (state, action) => {
            console.log("Authenticate reducer pending,", state, action);
            state.loading = LOADING_STATES.pending;
        },
    },
});

export const selectInitialState = (state: RootState) => {
    return state.app;
};

export default appSlice.reducer;
