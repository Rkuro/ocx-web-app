import React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        backdrop: {},
    })
);

interface LoaderFullProps {
    open: boolean;
}

const LoaderFull: React.FunctionComponent<LoaderFullProps> = (props) => {
    const classes = useStyles();
    return (
        <Backdrop className={classes.backdrop} open={props.open}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default LoaderFull;
