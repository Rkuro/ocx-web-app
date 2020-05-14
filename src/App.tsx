import React, { useEffect } from "react";
import Router from "./routers/root";
import "./App.css";
// import { useCookies } from 'react-cookie';
// import initializeStore from './app/init';
import { useDispatch, useSelector } from "react-redux";
import { LoaderFull } from "./components";
import { selectAuth, reAuthenticateThunk } from "./pages/auth/authSlice";

const App: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const authState = useSelector(selectAuth);

    // Run functions on app startup
    useEffect(() => {
        dispatch(reAuthenticateThunk());
    }, [dispatch]);
    return (
        <React.Fragment>
            <LoaderFull open={authState.loading} />
            <div className="App">
                <Router />
            </div>
        </React.Fragment>
    );
};

export default App;
