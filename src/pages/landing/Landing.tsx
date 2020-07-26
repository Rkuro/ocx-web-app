import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import GreetingText from "../../components/animated/greeting-text/GreetingText";
import { selectGreeting } from "../../components/animated/greeting-text/greetingSlice";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { PageContainer, BackgroundRandomLines } from "../../components";
import BackgroundStatisticsConnection from "../../components/animated/background-statistics/BackgroundStatisticsConnection";
import BackgroundStatisticsGeneric from "../../components/animated/background-statistics/BackgroundStatisticsGeneric";
import LandingContent from "./LandingContent";

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
            flex: "1",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
        },
        statusIndicator: {
            position: "absolute",
        },
        welcomeAnimation: {
            flex: "1",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
        },
        statisticsGeneric: {
            position: "absolute",
        },
    })
);

const Landing: React.FunctionComponent = () => {
    const classes = useStyles();
    const greetingFinished = useSelector(selectGreeting);
    const [cookies] = useCookies(["greetingViewed"]);
    const greetingViewed = Boolean(cookies.greetingViewed);
    const showGreeting = !greetingFinished && !greetingViewed; // show the greeting if they haven't seen it or it's still running
    return (
        <>
            <PageContainer flex nav>
                <BackgroundRandomLines />
                <BackgroundStatisticsConnection />
                <BackgroundStatisticsGeneric
                    containerClassName={classes.statisticsGeneric}
                />
                {showGreeting && <GreetingText />}
                {!showGreeting && <LandingContentContainer />}
            </PageContainer>
        </>
    );
};

// Bunch of boiler plate left for when I implement a welcome animation
const LandingContentContainer: React.FunctionComponent = () => {
    // const classes = useStyles();
    // const authState = useSelector(selectAuth);
    // const [statusIndicatorActive, setStatusIndicatorActive] = useState(false);
    // const [
    //     welcomeAnimationDisplaying,
    //     setWelcomeAnimationDisplaying,
    // ] = useState(false);
    // const [welcomeAnimationRunning, setWelcomeAnimationRunning] = useState(
    //     false
    // );
    // const [statusIndicatorType, setStatusIndicatorType] = useState(
    //     STATUS_INDICATOR_TYPE.PROGRESS
    // );
    // const [status, setStatus] = useState("");

    // useEffect(() => {
    //     if (authState.loading) {
    //         setStatusIndicatorActive(true);
    //         setStatusIndicatorType(STATUS_INDICATOR_TYPE.PROGRESS);
    //         setStatus("Loading Authentication Data");
    //     }
    //     if (authState.error) {
    //         setTimeout(() => {
    //             setStatusIndicatorType(STATUS_INDICATOR_TYPE.ERROR);
    //             setStatus(
    //                 authState.error
    //                     ? authState.error.message
    //                     : "Error getting authentication status"
    //             );
    //         }, 2000);
    //         setTimeout(() => {
    //             setStatusIndicatorActive(false);
    //             setWelcomeAnimationRunning(true);
    //         }, 4000);
    //     }
    //     if (authState.user != null) {
    //         setTimeout(() => {
    //             setStatusIndicatorType(STATUS_INDICATOR_TYPE.SUCCESS);
    //             setStatus("Authentication Successful");
    //         }, 2000);
    //         setTimeout(() => {
    //             setStatusIndicatorActive(false);
    //             setWelcomeAnimationRunning(true);
    //         }, 4000);
    //     }
    // }, [authState]);

    // const animationRunning = statusIndicatorActive || welcomeAnimationRunning;
    const animationRunning = false;
    // console.log("[Landing] authState:", authState);
    return (
        <>
            {/* {animationRunning && (
                <div className={classes.content}>
                    <div
                        className={clsx(
                            classes.contentCentered,
                            classes.statusIndicator
                        )}
                    >
                        <StatusIndicator
                            type={statusIndicatorType}
                            status={status}
                            active={statusIndicatorActive}
                        />
                    </div>
                    <div
                        className={clsx(
                            classes.contentCentered,
                            classes.welcomeAnimation
                        )}
                    >
                        <WelcomeAnimation
                            display={welcomeAnimationDisplaying}
                            setDisplay={setWelcomeAnimationDisplaying}
                            run={welcomeAnimationRunning}
                            setRun={setWelcomeAnimationRunning}
                        />
                    </div>
                </div>
            )} */}

            {!animationRunning && <LandingContent />}
        </>
    );
};

export default Landing;
