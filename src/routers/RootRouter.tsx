import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "../app/constants/routes";
import { Auth, Landing } from "../pages";
import Dashboard from "../pages/dashboard/DashboardLanding";

const RootRouter: React.FunctionComponent = () => {
    return (
        <Router>
            <Route path={Routes.HOME} exact component={Landing} />
            <Route path={Routes.DASHBOARD} exact component={Dashboard} />
            <Route path={Routes.AUTH} component={Auth} />
        </Router>
    );
};

export default RootRouter;
