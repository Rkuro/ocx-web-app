/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import slices from "../../app/constants/slices";
import { authenticate, reAuthenticate } from "../../app/api";
import {
    AuthenticationRequest,
    AuthenticationResult,
} from "@feathersjs/authentication/lib";
import LOADING_STATE from "../../app/constants/loading";
import { User } from "../../app/types";

export enum AuthStage {
    LANDING = "LANDING",
    LOGIN = "LOGIN",
    SIGNUP = "SIGNUP",
}

interface AuthState {
    meta: {
        stage: AuthStage;
    };
    loading: boolean;
    error: null | Error;
    user: null | User;
}

const initialState: AuthState = {
    meta: {
        stage: AuthStage.LANDING,
    },
    loading: false,
    error: null,
    user: null,
};

export interface AuthDispatchReturn {
    payload: AuthStage;
    type: string;
}

interface AuthenticatePayload {
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
    const response = await reAuthenticate();
    return response.data;
});

export const authSlice = createSlice({
    name: slices.AUTH,
    initialState,
    reducers: {
        updateStage: (state, action: PayloadAction<AuthStage>): void => {
            state.meta.stage = action.payload;
        },
        updateLoadingState: (state, action: PayloadAction<boolean>): void => {
            state.loading = action.payload;
        },
    },
    extraReducers: {
        [reAuthenticateThunk.fulfilled as any]: (state, action): void => {
            // console.log("Authenticate reducer fulfilled,", state, action);
            state.loading = false;
        },
        [reAuthenticateThunk.rejected as any]: (state, action): void => {
            // console.log("Authenticate reducer rejected,", state, action);
            state.loading = false;
            // state.error = action.
        },
        [reAuthenticateThunk.pending as any]: (state, action): void => {
            // console.log("Authenticate reducer pending,", state, action);
            state.loading = true;
        },
    },
});

export const { updateStage } = authSlice.actions;

export const selectAuth = (state: RootState): AuthState => {
    return state.auth;
};

export default authSlice.reducer;
