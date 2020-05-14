import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectAuth, AuthStage } from "./authSlice";
import AuthStageLanding from "./stages/AuthStageLanding";
import AuthStageLogin from "./stages/AuthStageLogin";
import { PageContainer, Panel } from "../../components";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    })
);

const renderSwitch = (stage: AuthStage): React.ReactNode => {
    switch (stage) {
        case AuthStage.LANDING:
            return <AuthStageLanding />;
        case AuthStage.LOGIN:
            return <AuthStageLogin />;
        default:
            return null;
    }
};

const Auth: React.FunctionComponent = () => {
    const classes = useStyles();
    const auth = useSelector(selectAuth);
    console.log("Auth State:", auth);

    return (
        <>
            <PageContainer nav flex>
                <div className={classes.root}>
                    <Panel corners inlineCorners borderBottom borderTop>
                        {renderSwitch(auth.meta.stage)}
                    </Panel>
                </div>
            </PageContainer>
        </>
    );
};

export default Auth;
