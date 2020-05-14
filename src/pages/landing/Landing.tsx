import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import GreetingText from "../../components/greeting-text/GreetingText";
import { selectGreeting } from "../../components/greeting-text/greetingSlice";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { PageContainer, TransitionButton } from "../../components";
import { selectAuth } from "../auth/authSlice";
import { Transition } from "react-transition-group";
import StatusIndicator, {
    STATUS_INDICATOR_TYPE,
} from "../../components/status-indicator/StatusIndicator";

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
    console.log("auth state loading:", authState.loading);
    console.log("authLoadingAnimationRunning", authLoadingAnimationRunning);
    return (
        <div className={classes.content}>
            <Transition
                in={showLoading}
                timeout={1000}
                onEnter={(): void => {
                    console.log("onEnter Called");
                    setAuthLoadingAnimationRunning(true);
                }}
                onExited={(): void => {
                    console.log("onexited called");
                    setAuthLoadingAnimationRunning(false);
                }}
            >
                {(state) => {
                    console.log("state", state);
                    return (
                        <StatusIndicator
                            type={STATUS_INDICATOR_TYPE.PROGRESS}
                            status="Loading Authentication Data"
                            setFinished={() => setAuthLoadingAnimationRunning(false)}
                        />
                    );
                }}
            </Transition>
            {/* {showLoading ? (
                <Transition
                    in={authLoadingAnimationRunning}
                    timeout={10000}
                    onEnter={(): void => {
                        console.log("onEnter Called");
                        setAuthLoadingAnimationRunning(true);
                    }}
                    onExited={(): void => {
                        console.log("onexited called");
                        setAuthLoadingAnimationRunning(false);
                    }}
                >
                    {(state) => {
                        console.log("state", state);
                        return (
                            <div>transitioning: {JSON.stringify(state)}</div>
                        );
                    }}
                </Transition>
            ) : (
                <TransitionButton
                    link="/auth"
                    variant="contained"
                    color="secondary"
                >
                    Get Started
                </TransitionButton>
            )} */}
        </div>
    );
};

export default Landing;
