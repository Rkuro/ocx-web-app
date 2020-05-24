import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import GreetingText from "../../components/animated/greeting-text/GreetingText";
import { selectGreeting } from "../../components/animated/greeting-text/greetingSlice";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { PageContainer } from "../../components";
import { selectAuth } from "../auth/authSlice";
import StatusIndicator, {
    STATUS_INDICATOR_TYPE,
} from "../../components/animated/status-indicator/StatusIndicator";

const useStyles = makeStyles(() =>
    createStyles({
        getStarted: {},
        getStartedLink: {
            textDecoration: "none",
        },
        getStartedButton: {
            minWidth: "300px",
        },
        content: {
            flex: "1",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
        },
    })
);

const Landing: React.FunctionComponent = () => {
    const greetingFinished = useSelector(selectGreeting);
    const [cookies] = useCookies(["greetingViewed"]);
    const greetingViewed = Boolean(cookies.greetingViewed);
    const showGreeting = !greetingFinished && !greetingViewed;
    // const showGreeting = true;
    return (
        <>
            <PageContainer nav flex>
                {showGreeting && <GreetingText />}
                {!showGreeting && <LandingContent />}
            </PageContainer>
        </>
    );
};

const LandingContent: React.FunctionComponent = () => {
    const classes = useStyles();
    const authState = useSelector(selectAuth);
    const [
        authLoadingAnimationRunning,
        setAuthLoadingAnimationRunning,
    ] = useState(false);

    useEffect(() => {
        if (authState.loading && !authLoadingAnimationRunning) {
            setAuthLoadingAnimationRunning(true);
        }
    });

    const showLoading = authState.loading || authLoadingAnimationRunning;
    return (
        <div className={classes.content}>
            <StatusIndicator
                type={STATUS_INDICATOR_TYPE.PROGRESS}
                status="Loading Authentication Data"
            />
        </div>
    );
};

export default Landing;
