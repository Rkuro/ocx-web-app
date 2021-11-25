import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Routes as LocalRoutes } from "../app/constants/routes";
import { Auth, Landing } from "../pages";
import Dashboard from "../pages/dashboard/Dashboard";

const RootRouter: React.FunctionComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path={LocalRoutes.AUTH} element={<Auth />} />
                <Route path={LocalRoutes.DASHBOARD} element={<Dashboard />} />
                <Route path={LocalRoutes.HOME} element={<Landing />} />
            </Routes>
        </Router>
    );
};

export default RootRouter;
