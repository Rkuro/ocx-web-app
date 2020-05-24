import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import hexToRgba from "hex-to-rgba";
import { themeExtras } from "../../theme";
import { motion, MotionProps } from "framer-motion";
import { runFunctionsOnTimeout } from "../../utils/TimeoutUtils";
import { mapValue, mapValues } from "../../utils/ValueMapping";
import { useFlickerAnimations } from "../../utils/AnimationGenerators";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            position: "relative",
            background: `linear-gradient(${hexToRgba(
                theme.palette.primary.dark,
                0.5
            )}, 70%, ${hexToRgba(theme.palette.primary.light, 0.5)})`,
            padding: theme.spacing(4),
            minWidth: "300px",
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
    panelMotion?: MotionProps;
    cornersMotion?: MotionProps;
}

const Panel: React.FunctionComponent<PanelProps> = (props) => {
    const classes = useStyles();
    // const opacities = generateFlickerOpacities();

    const { opacities, times } = useFlickerAnimations();

    const animate = {
        opacity: opacities,
    };

    const transition = {
        duration: 1,
        times: times,
    };

    return (
        <motion.div
            className={clsx({
                [classes.container]: true,
                [classes.borderBottom]: props.borderBottom,
                [classes.borderTop]: props.borderTop,
            })}
            animate={animate}
            transition={transition}
            {...props.panelMotion}
        >
            {props.corners && <PanelCorners {...props} />}
            {props.children}
        </motion.div>
    );
};

/**
 * helper function: return whether or not it should be inlined
 */
const fetchContainmentStatus = (
    containmentType: string,
    corner: string,
    inline?: boolean
): boolean => {
    const cornerType = corner.includes("top") ? "top" : "bottom";
    if (cornerType != containmentType) return false;
    return Boolean(inline);
};

// Work clockwise starting from the top left
const PanelCorners: React.FunctionComponent<PanelProps> = (props) => {
    const classes = useStyles();
    const corners = ["topLeft", "topRight", "bottomRight", "bottomLeft"];

    return (
        <>
            {corners.map((corner) => {
                const cornerKey = classes[corner];
                return (
                    <motion.div
                        key={`${corner}-corner`}
                        className={clsx({
                            [classes.common]: true,
                            [cornerKey]: true,
                            [classes.topContained]: fetchContainmentStatus(
                                "top",
                                corner,
                                props.inlineCorners
                            ),
                            [classes.bottomContained]: fetchContainmentStatus(
                                "bottom",
                                corner,
                                props.inlineCorners
                            ),
                        })}
                        {...props.cornersMotion}
                    />
                );
            })}
        </>
    );
};

export default Panel;
