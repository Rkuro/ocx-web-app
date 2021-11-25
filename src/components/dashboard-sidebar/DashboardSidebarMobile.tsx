import React from "react";
import { DashboardSidebarChildProps } from "./DashboardSidebar";
import {
    makeStyles,
    createStyles,
    Button,
    Typography,
    Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { AnimatePresence, motion } from "framer-motion";

const useStyles = makeStyles(() =>
    createStyles({
        triggerContainer: {
            position: "absolute",
            bottom: "10vw",
            right: "10vw",
            padding: "2vw",
        },
        container: {
            position: "absolute",
            bottom: 0,
            width: "100%",
        },
        baseButtonContainer: {
            display: "flex",
        },
        dashboardMenuItems: {
            display: "flex",
            flexDirection: "column",
        },
        dashboardMenuItem: {},
    })
);

const DashboardSidebarMobile: React.FunctionComponent<
    DashboardSidebarChildProps
> = (props) => {
    const classes = useStyles();
    const triggerVariants = {
        open: {
            opacity: 1,
        },
        closed: {
            opacity: 0,
        },
    };
    const triggerExit = {
        opacity: 0,
    };
    const menuVariants = {
        open: {
            opacity: 1,
        },
        closed: {
            opacity: 0,
        },
    };
    const menuExit = {
        opacity: 0,
    };
    return (
        <>
            <AnimatePresence>
                {props.collapsed && (
                    <motion.div
                        className={classes.triggerContainer}
                        variants={triggerVariants}
                        exit={triggerExit}
                    >
                        <Button
                            onClick={() => props.setCollapsed(!props.collapsed)}
                        >
                            <MenuIcon fontSize="large" />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {!props.collapsed && (
                    <motion.div
                        className={classes.container}
                        animate={props.collapsed ? "closed" : "open"}
                        exit={menuExit}
                        variants={menuVariants}
                    >
                        <SidebarMenuContents />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const SidebarMenuContents: React.FunctionComponent = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.baseButtonContainer}>
                <Button>
                    <HomeIcon />
                </Button>
                <Button>
                    <SettingsIcon />
                </Button>
                <Button>
                    <ExitToAppIcon />
                </Button>
            </div>
            <div className={classes.dashboardMenuItems}>
                <div className={classes.dashboardMenuItem}>
                    <Typography>Dashboard</Typography>
                </div>
                <Divider />
                <div className={classes.dashboardMenuItem}>
                    <Typography>Loan Marketplace</Typography>
                </div>
                <Divider />
                <div className={classes.dashboardMenuItem}>
                    <Typography>Security Switchboard</Typography>
                </div>
            </div>
        </>
    );
};

export default DashboardSidebarMobile;
