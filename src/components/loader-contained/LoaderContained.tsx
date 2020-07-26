import React from "react";
import { makeStyles, createStyles, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            width: "100%",
            flex: 1,
        },
    })
);

const LoaderContainer: React.FunctionComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <CircularProgress />
        </div>
    );
};

export default LoaderContainer;
