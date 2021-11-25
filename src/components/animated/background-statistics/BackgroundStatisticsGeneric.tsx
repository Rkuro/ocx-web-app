import React from "react";
import Clock from "react-live-clock";
import { CSSProperties } from "@material-ui/styles";
import { Typography, makeStyles, createStyles, Theme } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: theme.spacing(2),
        },
        typography: {},
    })
);

interface BackgroundStatisticsGenericProps {
    containerClassName?: string;
    containerStyle?: CSSProperties;
}

const BackgroundStatisticsGeneric: React.FunctionComponent<
    BackgroundStatisticsGenericProps
> = (props) => {
    const classes = useStyles();

    return (
        <div
            style={props.containerStyle}
            className={clsx(props.containerClassName, classes.container)}
        >
            <Typography>
                <Clock
                    format={"HH:mm:ss.SS"}
                    ticking={true}
                    interval={1}
                    timezone={"US/Eastern"}
                />
            </Typography>
        </div>
    );
};

export default BackgroundStatisticsGeneric;
