import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        animationContainer: {},
    })
);

const LandingAnimation: React.FunctionComponent = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.animationContainer}></div>
        </>
    );
};

export default LandingAnimation;
