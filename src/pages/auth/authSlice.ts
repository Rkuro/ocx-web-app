/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import slices from "../../app/constants/slices";
import { authenticate, reAuthenticate } from "../../app/api";
import {
    AuthenticationRequest,
    AuthenticationResult,
} from "@feathersjs/authentication/lib";
import { User } from "../../app/types";

export interface AuthState {
    meta: {};
    loading: boolean;
    error: null | Error;
    user: null | User;
}

const initialState: AuthState = {
    meta: {},
    loading: true, // initializing to true to not flash pieces of the app
    error: null,
    user: null,
};

export interface AuthenticatePayload {
    creds?: {
        email: string;
        password: string;
    };
}

export const authenticateThunk = createAsyncThunk<
    AuthenticationResult,
    AuthenticatePayload
>("user/authenticate", async (payload) => {
    if (payload.creds !== undefined) {
        const requestPayload: AuthenticationRequest = {
            strategy: "local",
            email: payload.creds.email,
            password: payload.creds.password,
        };
        return await authenticate(requestPayload);
    } else {
        return await reAuthenticate();
    }
});

export const reAuthenticateThunk = createAsyncThunk<
    AuthenticationResult,
    undefined
>("user/reauthenticate", async () => {
    return await reAuthenticate();
});

export const authSlice = createSlice({
    name: slices.AUTH,
    initialState,
    reducers: {
        updateLoadingState: (state, action: PayloadAction<boolean>): void => {
            state.loading = action.payload;
        },
    },
    extraReducers: {
        [authenticateThunk.fulfilled as any]: (state, action): void => {
            console.log("Authenticate reducer fulfilled:", state, action);
            state.loading = false;
            state.error = null;
            state.user = action.payload.user;
        },
        [authenticateThunk.rejected as any]: (state, action): void => {
            console.log("Authenticate reducer rejected", state, action);
            state.loading = false;
            state.error = action.error;
        },
        [authenticateThunk.pending as any]: (state, action): void => {
            console.log("Authenticate reducer pending", state, action);
            state.loading = true;
        },
        [reAuthenticateThunk.fulfilled as any]: (state, action): void => {
            console.log("ReAuthenticate reducer fulfilled,", state, action);
            state.loading = false;
            state.error = null;
            state.user = action.payload.user;
        },
        [reAuthenticateThunk.rejected as any]: (state, action): void => {
            console.log("ReAuthenticate reducer rejected,", state, action);
            state.loading = false;
            state.error = action.error;
        },
        [reAuthenticateThunk.pending as any]: (state, action): void => {
            console.log("ReAuthenticate reducer pending,", state, action);
            state.loading = true;
        },
    },
});

export const { updateLoadingState } = authSlice.actions;

export const selectAuth = (state: RootState): AuthState => {
    return state.auth;
};

export default authSlice.reducer;
