import React from "react";
import { Routes, Route } from "react-router-dom";
import { Routes as LocalRoutes } from "../app/constants/routes";
import DashboardLanding from "../pages/dashboard/DashboardLanding";
import DashboardLendee from "../pages/dashboard/dashboard-lendee/DashboardLendee";
import DashboardLender from "../pages/dashboard/lender/DashboardLender";

const DashboardRouter: React.FunctionComponent = () => {
    return (
        <Routes>
            <Route
                path={LocalRoutes.LENDEE_DASHBOARD}
                element={<DashboardLendee />}
            />
            <Route
                path={LocalRoutes.LENDER_DASHBOARD}
                element={<DashboardLender />}
            />
            <Route
                path={LocalRoutes.DASHBOARD}
                element={<DashboardLanding />}
            />
        </Routes>
    );
};

export default DashboardRouter;
