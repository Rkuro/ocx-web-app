import React, { useEffect } from 'react';
import Router from './routers/root'
import './App.css';
// import { useCookies } from 'react-cookie';
// import initializeStore from './app/init';
import { useDispatch } from "react-redux";
import { fetchUserById } from './appSlice';

function App() {
    // const [cookies, setCookie] = useCookies();
    const dispatch = useDispatch();
    // const appState = useSelector(selectInitialState);

    // Run functions on app startup
    useEffect(() => {
        dispatch(fetchUserById("test"));
    }, [dispatch]);

    return (
        <React.Fragment>
            <div className="App">
                <Router/>
            </div>
        </React.Fragment>
    );
}

export default App;
