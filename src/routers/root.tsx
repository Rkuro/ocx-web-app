import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from "../app/constants/routes";
import { Auth, Landing, Login, Signup  } from "../pages";

export default function RootRouter() {
    return (
        <Router>
            <Route path={Routes.LOGIN} exact component={Login}/>
            <Route path={Routes.SIGNUP} exact component={Signup}/>
            <Route path={Routes.AUTH} exact component={Auth}/>
            <Route path={Routes.HOME} exact component={Landing}/>
        </Router>
    )
}