// As navigator.connection is experimental, need to specifiy as any
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { CSSProperties } from "@material-ui/styles";
import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            position: "absolute",
            top: "4vh",
            right: "4vw",
        },
    })
);

interface BackgroundStatisticsConnectionProps {
    className?: string;
    style?: CSSProperties;
}

const useNavigatorStats = () => {
    // downlink: 9.7
    // effectiveType: "4g"
    // onChange: e => { console.log("connection changed:", e); }
    // onchange: null
    // rtt: 50
    // saveData: false
    const navigator = window.navigator as any;
    return [
        {
            description: "Current Bandwidth",
            value: navigator.connection.downlink,
        },
        {
            description: "",
            value: navigator.connection.effectiveType,
        },
        {
            description: "",
            value: navigator.connection.rtt,
        },
        {
            description: "",
            value: navigator.connection.saveData,
        },
    ];
};

const BackgroundStatisticsConnection: React.FunctionComponent<BackgroundStatisticsConnectionProps> = (
    props
) => {
    const classes = useStyles();
    const navStats = useNavigatorStats();

    return (
        <div className={classes.container}>
            {navStats
                .filter((i) => i.value)
                .map((obj) => {
                    return null;
                })}
        </div>
    );
};

export default BackgroundStatisticsConnection;
