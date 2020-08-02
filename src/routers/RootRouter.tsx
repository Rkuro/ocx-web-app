import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "../app/constants/routes";
import { Auth, Landing } from "../pages";
import Dashboard from "../pages/dashboard/Dashboard";

const RootRouter: React.FunctionComponent = () => {
    return (
        <Router>
            <Switch>
                <Route path={Routes.AUTH} component={Auth} />
                <Route path={Routes.DASHBOARD} component={Dashboard} />
                <Route path={Routes.HOME} component={Landing} />
            </Switch>
        </Router>
    );
};

export default RootRouter;
