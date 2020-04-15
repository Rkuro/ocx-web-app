import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "./app/auth/user";
import { readUser } from "./app/api/index"
import slices from "./app/constants/slices";
import { RootState } from "./app/store";


const initialAppState = {
    appState: {},
    loading: 'idle'
}

export const fetchUserById = createAsyncThunk<IUser, string>(
    'app/fetchInitialState',
    async (userId, thunkAPI) => {
        console.log("fetchuserbyid called!")
        const response = await readUser(userId)
        return response.data
    }
)

const appSlice = createSlice({
    name: slices.APP,
    initialState: initialAppState,
    reducers: {

    },
    extraReducers: {
        [fetchUserById.fulfilled.name]: (state, action) => {
            console.log("fetch user fulfilled!", state, action)
        },
        [fetchUserById.rejected.name]: (state, action) => {
            console.log("fetch user rejected!", state, action)
        }
    }
})

export const selectInitialState = (state: RootState) =>{
    return state.app.appState;
}



export default appSlice.reducer;