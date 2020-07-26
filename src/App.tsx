import React, { useEffect } from "react";
import Router from "./routers/RootRouter";
import "./App.css";
// import { useCookies } from 'react-cookie';
// import initializeStore from './app/init';
import { useDispatch, useSelector } from "react-redux";
import { reAuthenticateThunk, selectAuth } from "./pages/auth/authSlice";
import init from "./app/init";
import { Backdrop, CircularProgress } from "@material-ui/core";

const App: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const authState = useSelector(selectAuth);

    // Run functions on app startup
    useEffect(() => {
        dispatch(reAuthenticateThunk());
        init();
    }, [dispatch]);

    console.log("[App] AuthState: ", authState);

    return (
        <div className="App">
            <Backdrop open={authState.loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            {!authState.loading && <Router />}
        </div>
    );
};

export default App;
