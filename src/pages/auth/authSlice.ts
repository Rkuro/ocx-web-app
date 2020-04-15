import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import slices from "../../app/constants/slices";
import { IUser } from "../../app/auth/user";
import { readUser } from "../../app/api/index";


const readUserThunk = createAsyncThunk<IUser, string>('users/read', async (payload: string, thunkApi) => {
    
    console.log("Read user thunk called!", payload);
    const response = await readUser(payload);
    console.log("Read user callback!", response);
    return response.json() as IUser;
})


interface AuthState {
    token: string
}

const initialState:AuthState = {
    token:""
}

export const authSlice = createSlice({
    name: slices.AUTH,
    initialState,
    reducers: {
        createUser: (state, action: PayloadAction<AuthState>) => {
            throw new Error("Not implemented")
        },
        readUser: (state, action: PayloadAction<AuthState>) => {
            console.log("Reading user!", state, action)
        },
        updateUser: (state, action: PayloadAction<AuthState>) => {
            throw new Error("Not implemented")
        },
        deleteUser: (state, action: PayloadAction<AuthState>) => {
            throw new Error("Not implemented")
        }
    },
    extraReducers: {
        [readUserThunk.fulfilled.name]: (state, action) => {
            console.log("Read user thunk fulfilled!", state, action)
        },
        [readUserThunk.rejected.name]: (state, action) => {
            console.log(" Read user thunk rejected:", state,action)
        } 
    }

});



export const selectAuth = (state:RootState) =>  {
    return state.auth;
}

export default authSlice.reducer;