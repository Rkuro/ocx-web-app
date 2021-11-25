import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Routes as LocalRoutes } from "../app/constants/routes";
import { Auth, Landing } from "../pages";
import Dashboard from "../pages/dashboard/Dashboard";

const RootRouter: React.FunctionComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path={LocalRoutes.AUTH}>
                    <Auth />
                </Route>
                <Route path={LocalRoutes.DASHBOARD}>
                    <Dashboard />
                </Route>
                <Route path={LocalRoutes.HOME}>
                    <Landing />
                </Route>
            </Routes>
        </Router>
    );
};

export default RootRouter;
