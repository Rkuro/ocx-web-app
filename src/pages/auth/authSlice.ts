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

interface CheckUserExistsPayload {
    email: string;
}

// export const checkUserExists = createAsyncThunk<
//     boolean,
//     CheckUserExistsPayload
// >("user/checkExists", async (payload, thunkApi) => {
//     // console.log("thunkApi", thunkApi);

// });

export const authSlice = createSlice({
    name: slices.AUTH,
    initialState,
    reducers: {
        updateStage: (state, action: PayloadAction<AuthStage>) => {
            state.meta.stage = action.payload;
        },
    },
    extraReducers: {},
});

export const { updateStage } = authSlice.actions;

export const selectAuth = (state: RootState): AuthState => {
    return state.auth;
};

export default authSlice.reducer;
