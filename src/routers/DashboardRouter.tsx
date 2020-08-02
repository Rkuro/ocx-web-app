import React from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "../app/constants/routes";
import DashboardLanding from "../pages/dashboard/DashboardLanding";
import DashboardLendee from "../pages/dashboard/dashboard-lendee/DashboardLendee";
import DashboardLender from "../pages/dashboard/lender/DashboardLender";

const DashboardRouter: React.FunctionComponent = () => {
    return (
        <Switch>
            <Route
                exact
                path={Routes.LENDEE_DASHBOARD}
                component={DashboardLendee}
            />
            <Route
                exact
                path={Routes.LENDER_DASHBOARD}
                component={DashboardLender}
            />
            <Route path={Routes.DASHBOARD} component={DashboardLanding} />
        </Switch>
    );
};

export default DashboardRouter;
