import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES as LocalRoutes } from "../app/constants/routes";
import { Auth, Landing } from "../pages";
import AuthStageLanding from "../pages/auth/stages/AuthStageLanding";
import AuthStageLogin from "../pages/auth/stages/AuthStageLogin";
import AuthStageSignup from "../pages/auth/stages/AuthStageSignup";
import Dashboard from "../pages/dashboard/Dashboard";

const RootRouter: React.FunctionComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path={LocalRoutes.AUTH} element={<Auth />}>
                    <Route
                        path={LocalRoutes.LOGIN}
                        element={<AuthStageLogin />}
                    />
                    <Route
                        path={LocalRoutes.SIGNUP}
                        element={<AuthStageSignup />}
                    />
                    <Route index element={<AuthStageLanding />} />
                </Route>
                <Route path={LocalRoutes.DASHBOARD} element={<Dashboard />} />
                <Route path={LocalRoutes.HOME} element={<Landing />} />
            </Routes>
        </Router>
    );
};

export default RootRouter;
