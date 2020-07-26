import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme, Grid, Button } from "@material-ui/core";
import { motion } from "framer-motion";
import Routes from "../../app/constants/routes";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        contentContainer: {
            flex: 1,
            display: "flex",
        },
        initialView: {
            display: "flex",
            flex: 1,
            padding: theme.spacing(2),
            alignItems: "center",
        },
        initialPanelContainer: {
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-around",
        },
    })
);

const LandingContent: React.FunctionComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.contentContainer}>
            <InitialView />
        </div>
    );
};

const InitialView: React.FunctionComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.initialView}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className={classes.initialPanelContainer}>
                        <motion.div animate={{ opacity: 1 }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                href={Routes.AUTH}
                            >
                                Get Started
                            </Button>
                        </motion.div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default LandingContent;
