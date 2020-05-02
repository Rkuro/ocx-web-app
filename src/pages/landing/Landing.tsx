import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import GreetingText from "../../components/greeting-text/GreetingText";
import Nav from "../../components/nav/Nav";
import { selectGreeting } from "../../components/greeting-text/greetingSlice";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { Fade } from "react-awesome-reveal";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            height: "100vh",
            width: "100vw",
            justifyContent: "center",
            alignItems: "center",
        },
        getStarted: {},
        getStartedLink: {
            textDecoration: "none",
        },
        getStartedButton: {
            minWidth: "300px",
        },
    })
);

export default function Hero() {
    const classes = useStyles();
    const greetingFinished = useSelector(selectGreeting);
    const [cookies] = useCookies(["greetingViewed"]);
    const greetingViewed = Boolean(cookies.greetingViewed);
    const showGreeting = !greetingFinished && !greetingViewed;
    console.log("show greeting", showGreeting);
    return (
        <div className={classes.root}>
            {showGreeting && <GreetingText />}
            {!showGreeting && <HeroPageContent />}
        </div>
    );
}

function HeroPageContent() {
    const classes = useStyles();
    return (
        <>
            <Fade>
                <Nav />
                <div className={classes.getStarted}>
                    <Link className={classes.getStartedLink} to="/auth">
                        <Button variant="contained" color="secondary">
                            <Typography>Get Started</Typography>
                        </Button>
                    </Link>
                </div>
            </Fade>
        </>
    );
}
