import React, { useEffect } from "react";
import { PageContainer, BackgroundRandomLines, Panel } from "../../components";
import { useSelector } from "react-redux";
import { selectAuth } from "../auth/authSlice";
import { useHistory } from "react-router";
import Routes from "../../app/constants/routes";
import { makeStyles, createStyles } from "@material-ui/styles";
import { Grid, Typography, Theme, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
        },
        headerContainer: {
            padding: theme.spacing(4),
            display: "flex",
            justifyContent: "center",
            flex: 0.4,
            alignItems: "center",
        },
        contentContainer: {
            flex: 0.6,
        },
        actionContainer: {
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            alignItems: "center",
        },
        actionHeader: {
            padding: theme.spacing(2),
        },
    })
);

const DashboardLanding: React.FunctionComponent = () => {
    const history = useHistory();
    const authState = useSelector(selectAuth);
    const classes = useStyles();

    // Catch non-authenticated users
    useEffect(() => {
        if (authState.user === null) {
            // history.push(Routes.AUTH);
        }
    }, [authState, history]);
    console.log("[Dashboard] rendering - ", authState);

    return (
        <PageContainer flex>
            <BackgroundRandomLines />

            <div className={classes.container}>
                <div className={classes.headerContainer}>
                    <Typography variant="h2">
                        How would you like to use OpenCreditX
                    </Typography>
                </div>
                <div className={classes.contentContainer}>
                    <Grid container justify="space-evenly">
                        <Grid item xs={12} md={3}>
                            <Panel corners>
                                <div className={classes.actionContainer}>
                                    <Typography
                                        variant="h4"
                                        className={classes.actionHeader}
                                    >
                                        Lender
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        href={Routes.LENDER_DASHBOARD}
                                    >
                                        View Dashboard
                                    </Button>
                                </div>
                            </Panel>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Panel corners>
                                <div className={classes.actionContainer}>
                                    <Typography
                                        variant="h4"
                                        className={classes.actionHeader}
                                    >
                                        Lendee
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        href={Routes.LENDEE_DASHBOARD}
                                    >
                                        View Dashboard
                                    </Button>
                                </div>
                            </Panel>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </PageContainer>
    );
};

export default DashboardLanding;
