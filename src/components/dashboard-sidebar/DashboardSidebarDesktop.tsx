import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { DashboardSidebarChildProps } from "./DashboardSidebar";

const useStyles = makeStyles(() => createStyles({}));

const DashboardSidebarDesktop: React.FunctionComponent<DashboardSidebarChildProps> = () => {
    const classes = useStyles();
    return <></>;
};

export default DashboardSidebarDesktop;
