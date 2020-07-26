import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Routes } from "../app/constants/routes";
import AuthStageLogin from "../pages/auth/stages/AuthStageLogin";
import AuthStageSignup from "../pages/auth/stages/AuthStageSignup";
import AuthStageLanding from "../pages/auth/stages/AuthStageLanding";

const AuthRouter: React.FunctionComponent = (props) => {
    const { path } = useRouteMatch();
    console.log(`Auth router: ${path}`);
    return (
        <>
            <Switch>
                <Route path={Routes.LOGIN} component={AuthStageLogin} />
                <Route path={Routes.SIGNUP} component={AuthStageSignup} />
                <Route path={Routes.AUTH} component={AuthStageLanding} />
            </Switch>
        </>
    );
};

export default AuthRouter;
