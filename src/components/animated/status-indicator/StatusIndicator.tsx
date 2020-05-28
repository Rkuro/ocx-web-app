import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import MovingBorder from "../moving-border/MovingBorder";
import BouncingLetters from "../bouncing-letters/BouncingLetters";
import Panel from "../../panel/Panel";
import { AnimatePresence } from "framer-motion";

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
    active: boolean;
}

const StatusIndicator: React.FunctionComponent<StatusIndicatorProps> = (
    props
) => {
    const classes = useStyles();
    const error = props.type === STATUS_INDICATOR_TYPE.ERROR;
    const progress = props.type === STATUS_INDICATOR_TYPE.PROGRESS;
    const success = props.type === STATUS_INDICATOR_TYPE.SUCCESS;

    return (
        <>
            <AnimatePresence>
                {props.active && (
                    <Panel
                        corners
                        inlineCorners
                        flickerIn
                        error={error}
                        success={success}
                    >
                        <MovingBorder bottom />
                        <div className={classes.container}>
                            <BouncingLetters
                                string={props.status}
                                active={progress}
                                error={error}
                                success={success}
                            />
                        </div>
                    </Panel>
                )}
            </AnimatePresence>
        </>
    );
};

export default StatusIndicator;
