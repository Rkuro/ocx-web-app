import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import slices from "../../app/constants/slices";

export enum AuthStage {
    LANDING = "LANDING",
    EMAIL = "EMAIL",
    USE_PASSWORD = "USE_PASSWORD",
    CREATE_PASSWORD = "CREATE_PASSWORD",
}

interface AuthState {
    meta: {
        stage: AuthStage;
    };
}

const initialState: AuthState = {
    meta: {
        stage: AuthStage.LANDING,
    },
};

export const authSlice = createSlice({
    name: slices.AUTH,
    initialState,
    reducers: {
        createUser: (state, action: PayloadAction<AuthState>) => {
            throw new Error("Not implemented");
        },
        readUser: (state, action: PayloadAction<AuthState>) => {
            console.log("Reading user!", state, action);
        },
        updateUser: (state, action: PayloadAction<AuthState>) => {
            throw new Error("Not implemented");
        },
        deleteUser: (state, action: PayloadAction<AuthState>) => {
            throw new Error("Not implemented");
        },
        updateStage: (state, action: PayloadAction<AuthStage>) => {
            state.meta.stage = action.payload;
        },
    },
    extraReducers: {},
});

export const { updateStage } = authSlice.actions;

export const selectAuth = (state: RootState) => {
    return state.auth;
};

export default authSlice.reducer;
