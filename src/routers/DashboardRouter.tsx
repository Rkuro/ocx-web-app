import React from "react";
import { Routes, Route } from "react-router-dom";
import { Routes as LocalRoutes } from "../app/constants/routes";
import DashboardLanding from "../pages/dashboard/DashboardLanding";
import DashboardLendee from "../pages/dashboard/dashboard-lendee/DashboardLendee";
import DashboardLender from "../pages/dashboard/lender/DashboardLender";

const DashboardRouter: React.FunctionComponent = () => {
    return (
        <Routes>
            <Route path={LocalRoutes.LENDEE_DASHBOARD}>
                <DashboardLendee />
            </Route>
            <Route path={LocalRoutes.LENDER_DASHBOARD}>
                <DashboardLender />
            </Route>
            <Route path={LocalRoutes.DASHBOARD}>
                <DashboardLanding />
            </Route>
        </Routes>
    );
};

export default DashboardRouter;
