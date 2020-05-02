import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(4),
            minWidth: "300px",
        },
    })
);

const FormStepContainer: React.FunctionComponent = (props) => {
    const classes = useStyles();

    return (
        <>
            <Paper elevation={3}>
                <div className={classes.root}>{props.children}</div>
            </Paper>
        </>
    );
};

export default FormStepContainer;
