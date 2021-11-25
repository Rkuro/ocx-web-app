import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import { themeExtras } from "../../theme";
import { motion, MotionProps } from "framer-motion";
import { useFlickerAnimations } from "../../utils/AnimationGenerators";
import { getLinearGradient } from "../../utils/StyleFunctions";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        linkWrapper: {
            textDecoration: "none",
            color: theme.palette.text.primary,
        },
        container: {
            position: "relative",
            padding: theme.spacing(4),
            minWidth: "300px",
        },
        default: {
            background: getLinearGradient(
                theme.palette.primary.dark,
                theme.palette.primary.light
            ),
        },
        error: {
            background: getLinearGradient(
                theme.palette.error.dark,
                theme.palette.error.light
            ),
        },
        success: {
            background: getLinearGradient(
                theme.palette.success.dark,
                theme.palette.success.light
            ),
        },
        borderTop: {
            borderTop: `2px solid ${themeExtras.panelBorder}`,
        },
        borderBottom: {
            borderBottom: `2px solid ${themeExtras.panelBorder}`,
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
    disableAnimation?: boolean;
    inlineCorners?: boolean;
    corners?: boolean;
    borderTop?: boolean;
    borderBottom?: boolean;
    flickerIn?: boolean;
    error?: boolean;
    success?: boolean;
    panelMotion?: MotionProps;
    cornersMotion?: MotionProps;
    href?: string;
}

interface PanelCornerProps extends PanelProps {
    hoverActive: boolean;
}

const PanelWrapper: React.FunctionComponent<PanelProps> = (props) => {
    const classes = useStyles();
    return props.href ? (
        <Link to={props.href} className={classes.linkWrapper}>
            <Panel {...props} />
        </Link>
    ) : (
        <Panel {...props} />
    );
};

const Panel: React.FunctionComponent<PanelProps> = (props) => {
    const classes = useStyles();
    const { opacities, times } = useFlickerAnimations();
    const [hoverActive, setHoverActive] = useState(false);

    const variants = {
        idle: {},
        flicker: {
            opacity:
                props.flickerIn && !props.disableAnimation
                    ? opacities
                    : undefined,
            transition: {
                duration: 1,
                times: props.flickerIn ? times : undefined,
            },
        },
    };

    return (
        <motion.div
            className={clsx({
                [classes.container]: true,
                [classes.error]: props.error,
                [classes.success]: props.success,
                [classes.default]: !props.error && !props.success,
                [classes.borderBottom]: props.borderBottom,
                [classes.borderTop]: props.borderTop,
            })}
            animate="flicker"
            variants={variants}
            exit={{ opacity: 0 }}
            onMouseOver={() => setHoverActive(true)}
            onMouseLeave={() => setHoverActive(false)}
            {...props.panelMotion}
        >
            {props.corners && (
                <PanelCorners hoverActive={hoverActive} {...props} />
            )}
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
    if (cornerType !== containmentType) return false;
    return Boolean(inline);
};

const getCornerStartPoint = (corner: string): string => {
    const startOffset = 48;
    switch (corner) {
        case "topLeft":
            return `${startOffset}px, ${startOffset}px, 0`;
        case "topRight":
            return `-${startOffset}px, ${startOffset}px, 0`;
        case "bottomRight":
            return `-${startOffset}px, -${startOffset}px, 0`;
        case "bottomLeft":
            return `${startOffset}px, -${startOffset}px, 0`;
        default:
            return "0px, 0px, 0px";
    }
};

const getCornerHoverPoint = (corner: string): string => {
    const offset = 5;
    switch (corner) {
        case "topLeft":
            return `-${offset}px, -${offset}px, 0`;
        case "topRight":
            return `${offset}px, -${offset}px, 0`;
        case "bottomRight":
            return `${offset}px, ${offset}px, 0`;
        case "bottomLeft":
            return `-${offset}px, ${offset}px, 0`;
        default:
            return "0px, 0px, 0px";
    }
};

// Work clockwise starting from the top left
const PanelCorners: React.FunctionComponent<PanelCornerProps> = (props) => {
    const classes = useStyles();
    const corners = ["topLeft", "topRight", "bottomRight", "bottomLeft"];

    const variants = {
        moving: (corner: string): Record<string, unknown> => {
            return {
                transform: [
                    `translate3d(${getCornerStartPoint(corner)})`,
                    `translate3d(0px, 0px, 0px)`,
                ],
            };
        },
        hover: (corner: string): Record<string, unknown> => {
            // Handle moving the corners when the mouse hovers over the element
            return {
                transform: [
                    `translate3d(0px, 0px, 0px)`,
                    `translate3d(${getCornerHoverPoint(corner)})`,
                ],
            };
        },
        rest: (): Record<string, unknown> => {
            return {
                transform: "translate3d(0px, 0px, 0px)",
            };
        },
    };

    const transition = {
        duration: 0.2,
    };

    const exit = {
        opacity: 0,
    };

    let animate: string;
    if (props.disableAnimation) {
        animate = "";
    } else if (props.hoverActive) {
        animate = "hover";
    } else {
        animate = "rest";
    }

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
                        variants={variants}
                        animate={animate}
                        initial="moving"
                        custom={corner}
                        transition={transition}
                        exit={exit}
                        {...props.cornersMotion}
                    />
                );
            })}
        </>
    );
};

export default PanelWrapper;
