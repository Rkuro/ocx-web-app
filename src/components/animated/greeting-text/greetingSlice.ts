import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import slices from "../../../app/constants/slices";

interface GreetingState {
    finished: boolean;
}

const initialState: GreetingState = {
    finished: false,
};

export const slice = createSlice({
    name: slices.COUNTER,
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setFinished: (state, action: PayloadAction<boolean>) => {
            console.log("set finished called!");
            state.finished = action.payload;
        },
    },
});

export const { setFinished } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they"re used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectGreeting = (state: RootState) => {
    return state.greeting.finished;
};

export default slice.reducer;
