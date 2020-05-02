import React, { useEffect } from "react";
import Router from "./routers/root";
import "./App.css";
// import { useCookies } from 'react-cookie';
// import initializeStore from './app/init';
import { useDispatch, useSelector } from "react-redux";
import { reAuthenticateThunk, selectInitialState } from "./appSlice";
import { LoaderFull } from "./components";

function App() {
    // const [cookies, setCookie] = useCookies();
    const dispatch = useDispatch();
    const appState = useSelector(selectInitialState);

    // Run functions on app startup
    useEffect(() => {
        dispatch(reAuthenticateThunk());
    }, [dispatch]);
    console.log("appstate", appState);
    return (
        <React.Fragment>
            <LoaderFull open={appState.loading === "loading"} />
            <div className="App">
                <Router />
            </div>
        </React.Fragment>
    );
}

export default App;
