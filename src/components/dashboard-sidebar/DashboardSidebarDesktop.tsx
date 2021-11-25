import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { DashboardSidebarChildProps } from "./DashboardSidebar";

const useStyles = makeStyles(() =>
    createStyles({
        sidebar: {},
    })
);

const DashboardSidebarDesktop: React.FunctionComponent<
    DashboardSidebarChildProps
> = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.sidebar}></div>
        </React.Fragment>
    );
};

export default DashboardSidebarDesktop;
