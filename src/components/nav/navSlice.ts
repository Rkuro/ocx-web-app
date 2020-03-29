import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Page } from '../../app/constants/pages';


export interface NavActionPayload {
    currentPage: Page,
    newPage: Page
}

interface NavState {
    currentPage: Page,
    prevPage: Page
}

const initialState: NavState = {
    currentPage: Page.HOME,
    prevPage: Page.HOME
}


export const navSlice = createSlice({
    name:'slices.NAV',
    initialState:initialState,
    reducers: {
        changePage: (state, action:PayloadAction<NavActionPayload>) => {
            state.prevPage = action.payload.currentPage;
            state.currentPage = action.payload.newPage;
        }
    }
})

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) =>{
    console.log("State: ", state)
    return state.counter.value;
}



export default navSlice.reducer;