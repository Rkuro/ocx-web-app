import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Page } from "../../app/constants/pages";

export interface NavActionPayload {
    currentPage: Page;
    newPage: Page;
}

interface NavState {
    currentPage: Page;
    prevPage: Page;
}

const initialState: NavState = {
    currentPage: Page.HOME,
    prevPage: Page.HOME,
};

export const navSlice = createSlice({
    name: "slices.NAV",
    initialState: initialState,
    reducers: {
        changePage: (
            state,
            action: PayloadAction<NavActionPayload>
        ): void | NavState => {
            state.prevPage = action.payload.currentPage;
            state.currentPage = action.payload.newPage;
        },
    },
});

export default navSlice.reducer;
