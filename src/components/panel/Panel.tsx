import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import hexToRgba from "hex-to-rgba";
import { themeExtras } from "../../theme";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            position: "relative",
            background: `linear-gradient(${hexToRgba(
                theme.palette.primary.dark,
                0.5
            )}, 70%, ${hexToRgba(theme.palette.primary.light, 0.5)})`,
            padding: theme.spacing(4),
        },
        borderTop: {
            borderTop: `2px solid ${themeExtras.border}`,
        },
        borderBottom: {
            borderBottom: `2px solid ${themeExtras.border}`,
        },
        common: {
            borderColor: "white",
            position: "absolute",
            width: "10px",
            height: "10px",
        },
        topLeft: {
            top: "-4px",
            left: 0,
            borderTop: "2px solid white",
            borderLeft: "2px solid white",
        },
        topRight: {
            top: "-4px",
            right: 0,
            borderTop: "2px solid white",
            borderRight: "2px solid white",
        },
        bottomRight: {
            bottom: "-4px",
            right: 0,
            borderBottom: "2px solid white",
            borderRight: "2px solid white",
        },
        bottomLeft: {
            bottom: "-4px",
            left: 0,
            borderBottom: "2px solid white",
            borderLeft: "2px solid white",
        },
        bottomContained: {
            bottom: "-2px",
        },
        topContained: {
            top: "-2px",
        },
    })
);

interface PanelProps {
    inlineCorners?: boolean;
    corners?: boolean;
    borderTop?: boolean;
    borderBottom?: boolean;
}

const Panel: React.FunctionComponent<PanelProps> = (props) => {
    const classes = useStyles();

    return (
        <div
            className={clsx({
                [classes.container]: true,
                [classes.borderBottom]: props.borderBottom,
                [classes.borderTop]: props.borderTop,
            })}
        >
            {props.corners && <PanelCorners {...props} />}
            {props.children}
        </div>
    );
};

const PanelCorners: React.FunctionComponent<PanelProps> = (props) => {
    const classes = useStyles();
    return (
        <>
            <div
                className={clsx({
                    [classes.common]: true,
                    [classes.topLeft]: true,
                    [classes.topContained]: props.inlineCorners,
                })}
            />
            <div
                className={clsx({
                    [classes.common]: true,
                    [classes.topRight]: true,
                    [classes.topContained]: props.inlineCorners,
                })}
            />
            <div
                className={clsx({
                    [classes.common]: true,
                    [classes.bottomRight]: true,
                    [classes.bottomContained]: props.inlineCorners,
                })}
            />
            <div
                className={clsx({
                    [classes.common]: true,
                    [classes.bottomLeft]: true,
                    [classes.bottomContained]: props.inlineCorners,
                })}
            />
        </>
    );
};

export default Panel;
