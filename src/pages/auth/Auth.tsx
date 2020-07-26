import React, { useEffect } from "react";
import AuthRouter from "../../routers/AuthRouter";
import { PageContainer, Panel } from "../../components";
import { makeStyles, createStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import { selectAuth } from "./authSlice";
import { useHistory } from "react-router";
import Routes from "../../app/constants/routes";

const useStyles = makeStyles(() =>
    createStyles({
        contentContainer: {
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    })
);

const Auth: React.FunctionComponent = () => {
    const classes = useStyles();
    const authState = useSelector(selectAuth);
    const history = useHistory();

    useEffect(() => {
        // If the user is authenticated, push to dashboard
        if (authState.user != null) {
            history.push(Routes.DASHBOARD);
        }
    }, [history, authState]);

    return (
        <>
            <PageContainer flex>
                <div className={classes.contentContainer}>
                    <Panel corners inlineCorners disableAnimation>
                        <AuthRouter />
                    </Panel>
                </div>
            </PageContainer>
        </>
    );
};

export default Auth;
