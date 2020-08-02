import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import DashboardSidebarWrapper from "../../../components/dashboard-sidebar/DashboardSidebar";

const useStyles = makeStyles(() =>
    createStyles({
        dashboardContainer: {},
    })
);

const DashboardLendee: React.FunctionComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.dashboardContainer}>
            <DashboardSidebarWrapper />
        </div>
    );
};

export default DashboardLendee;
