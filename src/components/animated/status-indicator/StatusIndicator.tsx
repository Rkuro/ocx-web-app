import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import MovingBorder from "../moving-border/MovingBorder";
import BouncingLetters from "../bouncing-letters/BouncingLetters";
import Panel from "../../panel/Panel";
import { useTransform, useMotionValue } from "framer-motion";

export enum STATUS_INDICATOR_TYPE {
    "PROGRESS" = "PROGRESS",
    "ERROR" = "ERROR",
    "SUCCESS" = "SUCCESS",
}

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            display: "flex",
            position: "relative",
        },
    })
);

interface StatusIndicatorProps {
    type: STATUS_INDICATOR_TYPE;
    status: string;
}

const StatusIndicator: React.FunctionComponent<StatusIndicatorProps> = (
    props
) => {
    const classes = useStyles();

    return (
        <>
            <Panel corners inlineCorners>
                {/* <MovingBorder top /> */}
                <MovingBorder bottom />
                <div className={classes.container}>
                    <BouncingLetters string={props.status} />
                </div>
            </Panel>
        </>
    );
};

export default StatusIndicator;
