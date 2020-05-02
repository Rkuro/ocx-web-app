import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "../app/constants/routes";
import { Auth, Landing } from "../pages";

const RootRouter: React.FunctionComponent = (props) => {
    return (
        <Router>
            <Route path={Routes.AUTH} exact component={Auth} />
            <Route path={Routes.HOME} exact component={Landing} />
        </Router>
    );
};

export default RootRouter;
