import React, { useEffect } from "react";
import Router from "./routers/root";
import "./App.css";
// import { useCookies } from 'react-cookie';
// import initializeStore from './app/init';
import { useDispatch } from "react-redux";
import { reAuthenticateThunk } from "./pages/auth/authSlice";
import init from "./app/init";

const App: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    // const authState = useSelector(selectAuth);

    // Run functions on app startup
    useEffect(() => {
        dispatch(reAuthenticateThunk());
        init();
    }, [dispatch]);
    return (
        <React.Fragment>
            <div className="App">
                <Router />
            </div>
        </React.Fragment>
    );
};

export default App;
