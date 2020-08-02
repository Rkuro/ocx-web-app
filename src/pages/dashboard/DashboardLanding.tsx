import React, { useEffect } from "react";
import { PageContainer, BackgroundRandomLines, Panel } from "../../components";
import { useSelector } from "react-redux";
import { selectAuth } from "../auth/authSlice";
import { useHistory } from "react-router";
import Routes from "../../app/constants/routes";
import { makeStyles, createStyles } from "@material-ui/styles";
import { Grid, Typography, Theme, Button } from "@material-ui/core";
import BackgroundStatisticsGeneric from "../../components/animated/background-statistics/BackgroundStatisticsGeneric";

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
            padding: `0 ${theme.spacing(2)}px`,
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
            <BackgroundStatisticsGeneric />

            <div className={classes.container}>
                <div className={classes.headerContainer}>
                    <Typography variant="h4">
                        How would you like to use OpenCreditX
                    </Typography>
                </div>
                <div className={classes.contentContainer}>
                    <Grid container justify="space-evenly">
                        <Grid item xs={12} md={3}>
                            <Panel corners href={Routes.LENDER_DASHBOARD}>
                                <div className={classes.actionContainer}>
                                    <Typography
                                        variant="body1"
                                        className={classes.actionHeader}
                                    >
                                        Financial Institution
                                    </Typography>
                                </div>
                            </Panel>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Panel corners href={Routes.LENDEE_DASHBOARD}>
                                <div className={classes.actionContainer}>
                                    <Typography
                                        variant="body1"
                                        className={classes.actionHeader}
                                    >
                                        Individual
                                    </Typography>
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
