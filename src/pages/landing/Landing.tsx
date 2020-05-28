import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import GreetingText from "../../components/animated/greeting-text/GreetingText";
import { selectGreeting } from "../../components/animated/greeting-text/greetingSlice";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { PageContainer, BackgroundRandomLines } from "../../components";
import { selectAuth } from "../auth/authSlice";
import { STATUS_INDICATOR_TYPE } from "../../components/animated/status-indicator/StatusIndicator";
import BackgroundStatisticsConnection from "../../components/animated/background-statistics/BackgroundStatisticsConnection";
import WelcomeAnimation from "../../components/animated/welcome-animation/WelcomeAnimation";
import BackgroundStatisticsGeneric from "../../components/animated/background-statistics/BackgroundStatisticsGeneric";

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
        contentCentered: {
            position: "absolute",
        },
        statisticsGeneric: {
            position: "absolute",
        },
    })
);

const Landing: React.FunctionComponent = () => {
    // const classes = useStyles();
    const greetingFinished = useSelector(selectGreeting);
    const [cookies] = useCookies(["greetingViewed"]);
    const greetingViewed = Boolean(cookies.greetingViewed);
    const showGreeting = !greetingFinished && !greetingViewed; // show the greeting if they haven't seen it or it's still running
    return (
        <>
            <PageContainer flex nav>
                {showGreeting && <GreetingText />}
                {!showGreeting && <LandingContent />}
            </PageContainer>
        </>
    );
};

const LandingContent: React.FunctionComponent = () => {
    const classes = useStyles();
    const authState = useSelector(selectAuth);
    const [statusIndicatorActive, setStatusIndicatorActive] = useState(false);
    const [, setStatusIndicatorType] = useState(STATUS_INDICATOR_TYPE.PROGRESS);
    const [, setStatus] = useState("");

    useEffect(() => {
        if (authState.loading) {
            setStatusIndicatorActive(true);
            setStatusIndicatorType(STATUS_INDICATOR_TYPE.PROGRESS);
            setStatus("Loading Authentication Data");
        }
        if (authState.error) {
            setTimeout(() => {
                setStatusIndicatorType(STATUS_INDICATOR_TYPE.ERROR);
                setStatus(
                    authState.error
                        ? authState.error.message
                        : "Error getting authentication status"
                );
            }, 2000);
            setTimeout(() => {
                setStatusIndicatorActive(false);
            }, 4000);
        }
        if (authState.user != null) {
            setTimeout(() => {
                setStatusIndicatorType(STATUS_INDICATOR_TYPE.SUCCESS);
                setStatus("Authentication Successful");
            }, 2000);
            setTimeout(() => {
                setStatusIndicatorActive(false);
            }, 4000);
        }
    }, [authState]);

    console.log("authState:", authState);
    return (
        <>
            <BackgroundRandomLines />
            <BackgroundStatisticsConnection />
            <BackgroundStatisticsGeneric
                containerClassName={classes.statisticsGeneric}
            />
            <div className={classes.content}>
                {/* <div className={classes.contentCentered}>
                    <StatusIndicator
                        type={statusIndicatorType}
                        status={status}
                        active={statusIndicatorActive}
                    />
                </div> */}
                <div className={classes.contentCentered}>
                    <WelcomeAnimation active={!statusIndicatorActive} />
                </div>
            </div>
        </>
    );
};

export default Landing;
