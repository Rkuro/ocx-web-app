import React from "react";
import { Route, Routes } from "react-router-dom";
import { Routes as LocalRoutes } from "../app/constants/routes";
import AuthStageLogin from "../pages/auth/stages/AuthStageLogin";
import AuthStageSignup from "../pages/auth/stages/AuthStageSignup";
import AuthStageLanding from "../pages/auth/stages/AuthStageLanding";

const AuthRouter: React.FunctionComponent = () => {
    return (
        <>
            <Routes>
                <Route path={LocalRoutes.LOGIN} element={<AuthStageLogin />} />
                <Route
                    path={LocalRoutes.SIGNUP}
                    element={<AuthStageSignup />}
                />
                <Route
                    path={LocalRoutes.LANDING}
                    element={<AuthStageLanding />}
                />
            </Routes>
        </>
    );
};

export default AuthRouter;
